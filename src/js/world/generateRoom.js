import {
	randomInt
} from '../util/helper.js';
import * as c from "../util/constants.js";
import {
	draw
} from '../app.js';

const DEFAULT_MAX_ROOM_SIZE = 10;
const DEFAULT_MIN_ROOM_SIZE = 5;
const DEFAULT_EXIT_SIZE = 2;
const WALL_TILES = [{
	sprite: '🌳',
	walkable: false
}]; // Be careful of invisible characters
const PATH_TILES = [{
	sprite: '🌱',
	walkable: true
}];

export var currentRoom = insertExit(insertExit(insertExit(insertExit(generateRandomRoom(), c.SOUTH), c.NORTH), c.EAST), c.WEST);
// export var currentRoom = insertExit(generateRandomRoom(), c.WEST);
export var createRoom = () => insertExit(insertExit(insertExit(insertExit(generateRandomRoom(), c.SOUTH), c.WEST), c.EAST), c.NORTH);
/**
 * ROOM GENERATION
 */

function randomRoomSize() {
	return randomInt(DEFAULT_MIN_ROOM_SIZE, DEFAULT_MAX_ROOM_SIZE);
}

function roomShell(w, h) {
	var shell = [];
	var row = [];

	for (let j = 0; j < h; j++) {
		if (j == 0 || j == h - 1) {
			// Create a row of only walls
			shell.push(Array(w).fill(c.DEFAULT_WALL_TILE));
		} else {
			// Create a row with walls on either side
			for (let i = 0; i < w; i++) {
				if (i == 0 || i == w - 1) {
					row.push(c.DEFAULT_WALL_TILE);
				} else row.push(c.DEFAULT_PATH_TILE);
			}
			shell.push(row);
			row = [];
		}
	}
	return shell;
}

function insertExitXAxis(room, side) {
	var rowIndex;
	side == c.NORTH ? rowIndex = 0 : rowIndex = room.length - 1;

	var borderRangeX = room[rowIndex].length - 1;
	var whereX = randomInt(1, borderRangeX - DEFAULT_EXIT_SIZE);

	room[rowIndex].splice(whereX, DEFAULT_EXIT_SIZE, c.DEFAULT_PATH_TILE, c.DEFAULT_PATH_TILE);
	return room;
}

function insertExitYAxis(room, side) {
	var colIndex;
	side == c.WEST ? colIndex = 0 : colIndex = room[0].length - 1;

	var borderRangeY = room.length - 1;
	var whereY = randomInt(1, borderRangeY - DEFAULT_EXIT_SIZE);
	const roomCopy = room.slice();

	function createRowWithExit(exitIndex) {
		var row = [];
		var roomWidth = room[0].length;
		for (let i = 0; i < roomWidth; i++) {

			var oppositeSideIndex;
			if (exitIndex == 0) {
				oppositeSideIndex = roomWidth - 1;
			} else oppositeSideIndex = 0;

			if (i == exitIndex) {
				row.push(c.DEFAULT_PATH_TILE); // pathtile
			} else if (i != exitIndex && i == 0 || i == oppositeSideIndex) {
				row.push(c.DEFAULT_WALL_TILE);
			} else row.push(c.DEFAULT_PATH_TILE); // was pathtile
		}

		// FIXME: walls/paths are being overwritten by previous methods
		if (room[whereY][oppositeSideIndex] == c.DEFAULT_PATH_TILE) {
			row[oppositeSideIndex] = c.DEFAULT_PATH_TILE;
		}


		// console.log(side, row);
		return row;
	}
	roomCopy.splice(whereY, DEFAULT_EXIT_SIZE, createRowWithExit(colIndex), createRowWithExit(colIndex));

	return roomCopy;
}

function insertExit(room, direction) {
	if (direction == c.NORTH) {
		return insertExitXAxis(room, c.NORTH);
	} else if (direction == c.SOUTH) {
		return insertExitXAxis(room, c.SOUTH);
	} else if (direction == c.EAST) {
		return insertExitYAxis(room, c.EAST);
	} else if (direction == c.WEST) {
		return insertExitYAxis(room, c.WEST);
	}
}

function generateRandomRoom() {
	var shell = roomShell(randomRoomSize(), randomRoomSize());
	return shell;
}

/**
 * INSERTING / MOVING PLAYER
 */


function insertPlayerFirstAvailableSpace() {
	var pos = [];
	currentRoom.find((row, index1) => {
		if (
			row.find((space, index2) => {
				if (space === c.DEFAULT_PATH_TILE && pos.length < 2) {
					pos.push(index1);
					pos.push(index2);
					return;
				}
			})
		)
			return;
	});
	currentRoom[pos[0]][pos[1]] = c.player;
}

// move to new file
export function whatIsTile(x, y) {
	return currentRoom[x][y];
}

// move to new file
export function isTileWalkable(tile) {
	return PATH_TILES.includes(tile) ? true : false
}

/**
 * Some future thoughts:
 * Create a textbox that narrates what is happening
 */
