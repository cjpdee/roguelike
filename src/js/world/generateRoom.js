import {
	randomInt
} from '../util/helper.js';
import * as c from "../util/constants.js";
import {
	draw
} from '../app.js';

const DEFAULT_MAX_ROOM_SIZE = 8;
const DEFAULT_MIN_ROOM_SIZE = 5;
const DEFAULT_EXIT_SIZE = 2;
const WALL_TILES = ['🌳'];
const PATH_TILES = ['󠀠󠀠󠀠󠀠🌱'];

var playerPos = [1, 1];

export var currentRoom = insertExit(insertExit(insertExit(insertExit(generateRandomRoom(), c.SOUTH), c.WEST), c.EAST), c.NORTH);
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
			shell.push(Array(w).fill(c.wallTile));
		} else {
			// Create a row with walls on either side
			for (let i = 0; i < w; i++) {
				if (i == 0 || i == w - 1) {
					row.push(c.wallTile);
				} else row.push(c.pathTile);
			}
			shell.push(row);
			row = [];
		}
	}
	return shell;
}

function insertExitXAxis(room, rowIndex) {
	var borderRange = room[rowIndex].length - 1;
	var where = randomInt(1, borderRange - DEFAULT_EXIT_SIZE);

	room[rowIndex].splice(where, DEFAULT_EXIT_SIZE, c.pathTile, c.pathTile);
	return room;
}

function insertExitYAxis(room, colIndex) {
	var borderRange = room.length - 1;
	var where = randomInt(1, borderRange - DEFAULT_EXIT_SIZE);

	function createRowWithExit(exitIndex) {
		var row = [];
		let w = room[0].length;
		for (let i = 0; i < w; i++) {
			if (i == exitIndex) {
				row.push(c.pathTile);
			} else if (i != exitIndex && i == 0 || i == w - 1) {
				row.push(c.wallTile);
			} else row.push(c.pathTile);
		}
		return row;
	}

	room.splice(where, DEFAULT_EXIT_SIZE, createRowWithExit(colIndex), createRowWithExit(colIndex));
	return room;
}


function insertExit(room, direction) {
	if (direction == c.NORTH) {
		return insertExitXAxis(room, 0);
	} else if (direction == c.SOUTH) {
		return insertExitXAxis(room, room.length - 1);
	} else if (direction == c.EAST) {
		return insertExitYAxis(room, room[0].length - 1);
	} else if (direction == c.WEST) {
		return insertExitYAxis(room, 0);
	}
}

function generateRandomRoom() {
	var shell = roomShell(randomRoomSize(), randomRoomSize());
	return shell;
}

function buildRoom() {
	/*
		Parameters:
		an array of directions where there can be exits
		an array of monsters
		an 
	*/
}


/**
 * INSERTING / MOVING PLAYER
 */


function insertPlayerFirstAvailableSpace() {
	var pos = [];
	currentRoom.find((row, index1) => {
		if (
			row.find((space, index2) => {
				if (space === c.pathTile && pos.length < 2) {
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

export function insertPlayerToSpace(x, y) {
	currentRoom[x][y] = c.player;
}

function insertPlayer() {
	insertPlayerToSpace(playerPos[0], playerPos[1]);
}

export function resetTile(x, y) {
	currentRoom[x][y] = c.pathTile;
}

export function whatIsTile(x, y) {
	return currentRoom[x][y];
}

export function isTileWalkable(tile) {
	return PATH_TILES.includes(tile) ? true : false
}

function getPlayerPos() {
	currentRoom.find((row) => {
		return row.find((space) => space == c.player);
	});
}


export function movePlayer(direction) {
	resetTile(playerPos[0], playerPos[1]);
	if (direction == c.NORTH && currentRoom[playerPos[0] - 1][playerPos[1]] != c.wallTile) playerPos[0]--;
	if (direction == c.SOUTH && currentRoom[playerPos[0] + 1][playerPos[1]] != c.wallTile) playerPos[0]++;
	if (direction == c.WEST && currentRoom[playerPos[0]][playerPos[1] - 1] != c.wallTile) playerPos[1]--;
	if (direction == c.EAST && currentRoom[playerPos[0]][playerPos[1] + 1] != c.wallTile) playerPos[1]++;
	insertPlayer();
	draw();
}

export function moveEntity(entityId, currentPosX, currentPosY, direction) {
	// findEntity()
}
/**
 * Some future thoughts:
 * Create a textbox that narrates what is happening
 */
