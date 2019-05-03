import {
	randomInt
} from '../util/helper.js';
import * as c from "../util/constants.js";
import {
	draw
} from '../app.js';

const DEFAULT_MAX_LEVEL_SIZE = 30;
const DEFAULT_MIN_LEVEL_SIZE = 4;
const DEFAULT_EXIT_SIZE = 2;

var playerPos = [1, 1];

export var currentLevel = insertExit(insertExit(insertExit(insertExit(generateRandomLevel(), c.SOUTH), c.WEST), c.EAST), c.NORTH);


/**
 * LEVEL GENERATION
 */

function randomLevelSize() {
	return randomInt(DEFAULT_MIN_LEVEL_SIZE, DEFAULT_MAX_LEVEL_SIZE);
}

function levelShell(w, h) {
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

function insertExitXAxis(level, rowIndex) {
	var borderRange = level[rowIndex].length - 1;
	var where = randomInt(1, borderRange - DEFAULT_EXIT_SIZE);

	level[rowIndex].splice(where, DEFAULT_EXIT_SIZE, c.pathTile, c.pathTile);
	return level;
}

function insertExitYAxis(level, colIndex) {
	var borderRange = level.length - 1;
	var where = randomInt(1, borderRange - DEFAULT_EXIT_SIZE);

	function createRowWithExit(exitIndex) {
		var row = [];
		let w = level[0].length;
		for (let i = 0; i < w; i++) {
			if (i == exitIndex) {
				row.push(c.pathTile);
			} else if (i != exitIndex && i == 0 || i == w - 1) {
				row.push(c.wallTile);
			} else row.push(c.pathTile);
		}
		return row;
	}

	level.splice(where, DEFAULT_EXIT_SIZE, createRowWithExit(colIndex), createRowWithExit(colIndex));
	return level;
}


function insertExit(level, direction) {
	if (direction == c.NORTH) {
		return insertExitXAxis(level, 0);
	} else if (direction == c.SOUTH) {
		return insertExitXAxis(level, level.length - 1);
	} else if (direction == c.EAST) {
		return insertExitYAxis(level, level[0].length - 1);
	} else if (direction == c.WEST) {
		return insertExitYAxis(level, 0);
	}

}

function generateRandomLevel() {
	var shell = levelShell(randomLevelSize(), randomLevelSize());
	return shell;
}

function buildLevel() {
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
	currentLevel.find((row, index1) => {
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
	currentLevel[pos[0]][pos[1]] = c.player;
}

export function insertPlayerToSpace(x, y) {
	currentLevel[x][y] = c.player;
}

function insertPlayer() {
	insertPlayerToSpace(playerPos[0], playerPos[1]);
}

export function resetTile(x, y) {
	currentLevel[x][y] = c.pathTile;
}

function getPlayerPos() {
	currentLevel.find((row) => {
		return row.find((space) => space == c.player);
	});
}

export function movePlayer(direction) {
	resetTile(playerPos[0], playerPos[1]);
	if (direction == c.NORTH && currentLevel[playerPos[0] - 1][playerPos[1]] != c.wallTile) playerPos[0]--;
	if (direction == c.SOUTH && currentLevel[playerPos[0] + 1][playerPos[1]] != c.wallTile) playerPos[0]++;
	if (direction == c.WEST && currentLevel[playerPos[0]][playerPos[1] - 1] != c.wallTile) playerPos[1]--;
	if (direction == c.EAST && currentLevel[playerPos[0]][playerPos[1] + 1] != c.wallTile) playerPos[1]++;
	insertPlayer();
	draw();
}

export function moveEntity(entityId, currentPosX, currentPosY, direction) {
	// findEntity()
}


// functional idea or just the function to run to play

function playLevel(level, entryDirection) {
	// while inside boundaries
	// run the functions to play the level
	// use entrydirection to place the player at the right entrance
	// somehow this has to be figured out based on the previous level's available exits
}

/**
 * Some future thoughts:
 * Create a textbox that narrates what is happening
 */
