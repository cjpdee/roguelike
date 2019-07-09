import { randomInt } from '../util/helper';
import * as c from "../util/constants";
import { insertExit } from './room/insertExits';
import {
	draw
} from '../app.js';

const DEFAULT_MAX_ROOM_SIZE = 10;
const DEFAULT_MIN_ROOM_SIZE = 5;
const DEFAULT_EXIT_SIZE = 2;
// const WALL_TILES = [{
// 	sprite: '🌳',
// 	walkable: false
// }]; // Be careful of invisible characters
// const PATH_TILES = [{
// 	sprite: '🌱',
// 	walkable: true
// }];

export var currentRoom = insertExit(insertExit(insertExit(insertExit(generateRandomShell(), c.SOUTH), c.NORTH), c.EAST), c.WEST);
export var createRoom = () => insertExit(insertExit(insertExit(insertExit(generateRandomShell(), c.SOUTH), c.WEST), c.EAST), c.NORTH);

/**
 * ROOM GENERATION
 */

function randomRoomSize() {
	return randomInt(DEFAULT_MIN_ROOM_SIZE, DEFAULT_MAX_ROOM_SIZE);
}

// Create an empty matrix filled with path tiles & a wall tile border
function roomShell(w, h) {
	var shell = [];
	var row = [];

	for (let j = 0; j < h; j++) {
		if (j == 0 || j == h - 1) {
			// Create a row of only walls on top / bottom side
			shell.push(Array(w).fill(c.DEFAULT_WALL_TILE));
		} else {
			// Create a row with walls on either side (to fill the space)
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

function generateRandomShell() {
	var shell = roomShell(randomRoomSize(), randomRoomSize());
	return shell;
}

export function generateRandomRoom() {
	return insertExit(insertExit(insertExit(insertExit(generateRandomShell(), c.SOUTH), c.NORTH), c.EAST), c.WEST)
}

/**
 * INSERTING / MOVING PLAYER
 */

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
