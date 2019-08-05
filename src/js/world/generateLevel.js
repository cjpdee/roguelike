import * as r from "./generateRoom";
import {
	randomInt
} from "../util/helper";


const LEVEL_SIZE = 32;

/**
 * Overview of level generation
 * 1. Create Shell
 * 2. Try to place rooms x number of times
 * 
 * If room doesn't fit it will not be added and just keep trying.
 * 
 * In future we should be able to ask for a number of rooms and it will not count down until the room has been verified as created.
 * However this needs a failsafe - maximum number of rooms because this may cause infinite loops where creating new rooms is impossible.
 * So we must keep the numAttempts variable in case the loop exceeds it's value
 */


export function createLevelShell() {
	const row = () => Array(LEVEL_SIZE).fill(null);
	var level = [];
	for (let i = 0; i < LEVEL_SIZE; i++) {
		level.push(row());
	}

	return level
}

function placeFirstRoom(level) {
	const x = randomInt(0, LEVEL_SIZE);
	const y = randomInt(0, LEVEL_SIZE);
	let room = r.createRoom();

	return roomFitsInLevelBoundaries(level, room, x, y) ? spliceRoomIntoLevel(level, room, x, y) : placeFirstRoom(level);
}

// Checks if room fits within the current level
function roomFitsInLevelBoundaries(level, room, x, y) {
	// X axis fits?
	if (x + room[0].length > LEVEL_SIZE - 1) {
		return false
	}
	// Y axis fits?
	if (y + room.length > LEVEL_SIZE - 1) {
		return false
	}
	return true
}

function checkAreaIsClear(level, x, y, width, height) {
	if ((y + height) > LEVEL_SIZE || (x + width) > LEVEL_SIZE) {
		return false
	}

	// test if start + end columns are empty
	for (let counterY = 0; counterY < height; counterY++) {
		return isCellEmpty(level, x, counterY); // console.log("Cell at Y = " + y + counterY, "Left column");
	}
	for (let counterY = 0; counterY < height; counterY++) {
		return isCellEmpty(level, x + width + 1, counterY); //console.log("Cell at Y = " + y + counterY, "Right column");
	}

	// test if start + end rows are empty
	for (let counterX = 0; counterX < height; counterX++) {
		return isCellEmpty(level, counterX, y); // console.log("Cell at Y = " + y + counterX, "Left column");
	}
	for (let counterX = 0; counterX < height; counterX++) {
		return isCellEmpty(level, counterX, y + height + 1); //console.log("Cell at Y = " + y + counterY, "Right column");
	}
}

function placeRoomInRemainingSpace(level, numAttempts) {
	numAttempts = 80;

	// try to place room in random locations numAttempts times
	for (let i = 0; i < numAttempts; i++) {
		var newRoom = r.createRoom();
		var newRoomX = randomInt(0, LEVEL_SIZE);
		var newRoomY = randomInt(0, LEVEL_SIZE);

		checkAreaIsClear(level, newRoomX, newRoomY, newRoom[0].length, newRoom.length) && spliceRoomIntoLevel(level, newRoom, newRoomX, newRoomY);
	}

	return level;
}

function isCellEmpty(level, x, y) {
	return level[y][x] === null
}

export function tileIsWalkable(level, x, y) {
	if (level.length > y && level[0].length > x) {
		if (level[y][x] != null) {
			return level[y][x].walkable;
		}
	} else return false
}











// Splice function (doesn't check if valid)
function spliceRoomIntoLevel(level, room, x, y) {
	var index = room.length - 1;
	for (let i = (y + room.length); i > y; i--) {
		var jndex = room[index].length - 1;
		for (let j = (x + room[index].length); j > x; j--) {
			level[i - 1][j - 1] = room[index][jndex];
			jndex--;
		}
		index--;
	}

	// console.log('ere', level);
	return level

}

/**
 * Next:
 * Create a function which finds out if there are any spaces
 * within the matrix that can contain room
 * If not, try again
 * If so, place it in a random range within the available space
 * e.g. availableSpaceWidth - roomWidth = rangeX
 * availableSpaceWidthMin = row[-1] until it hits something that is not null
 */


////////

const level = createLevelShell();

export const testingLevel = placeRoomInRemainingSpace(placeRoomInRemainingSpace(placeFirstRoom(createLevelShell())));
