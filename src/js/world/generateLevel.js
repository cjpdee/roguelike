import * as r from "./generateRoom";
import {
	randomInt
} from "../util/helper";


const LEVEL_SIZE = 32;

function createLevel() {
	var numRooms = 0;
}


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

	// console.log('new room location:', x, y);

	let room = r.createRoom();
	// room = r.currentRoom; // TODO: remove later

	return roomFitsInLevelBoundaries(level, room, x, y) ? spliceRoomIntoLevel(level, room, x, y) : placeFirstRoom(level);
}

// Checks if room fits within the current level
function roomFitsInLevelBoundaries(level, room, x, y) {
	// X axis fits?
	if (x + room[0].length > LEVEL_SIZE - 1) {
		// console.log('Room could not be placed - X');
		console.log(x, room[0].length)
		return false
	}
	// Y axis fits?
	if (y + room.length > LEVEL_SIZE - 1) {
		// console.log('Room could not be placed - Y');
		console.log(y, room.length)
		return false
	}
	return true
}

function placeRoomInRemainingSpace(level, numRooms) {
	numRooms = 80;

	for (let i = 0; i < numRooms; i++) {
		var newRoom = r.createRoom();
		var newRoomX = randomInt(0, LEVEL_SIZE);
		var newRoomY = randomInt(0, LEVEL_SIZE);
		// console.log(newRoomY, newRoomX, newRoom);
		// console.log('height: ' + newRoom.length)
		// console.log('width: ' + newRoom[0].length)
		checkAreaIsClear(level, newRoomX, newRoomY, newRoom[0].length, newRoom.length) && spliceRoomIntoLevel(level, newRoom, newRoomX, newRoomY);
	}

	return level;
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


function isCellEmpty(level, x, y) {
	return level[y][x] === null
}

export function tileIsWalkable(level, x, y) {
	// console.log(level[y][x]);
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
