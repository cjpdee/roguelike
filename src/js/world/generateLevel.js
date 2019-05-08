import * as r from "./generateRoom";
import {
	randomInt
} from "../util/helper";
// room.currentRoom;


const LEVEL_SIZE = 24;



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

	console.log('new room location:', x, y);

	let room = r.createRoom();

	// check if x is valid
	// if (x + room[0].length > LEVEL_SIZE) {
	// 	console.log('wtf have you done');
	// 	room = r.createRoom()
	// }

	if (roomFits(level, room, x, y)) {
		spliceRoomIntoLevel(level, room, x, y);
	}


	// check if y is valid
}

function roomFits(level, room, x, y) {
	// X axis fits?
	if (x + room[0].length > LEVEL_SIZE) {
		console.log('wtf have you done');
		console.log(x, room[0].length)
		return false
	}
	// Y axis fits?
	if (y + room.length > LEVEL_SIZE) {
		console.log('wtf have you done');
		console.log(y, room.length)
		return false
	}
	return true
}

function spliceRoomIntoLevel(level, room, x, y) {
	for (let i = y; i < (y + room.length); i++) {
		console.log(room[i])
		room.forEach((row, index) => {
			var jndex = 0;
			for (let j = x; j < (x + room[0].length); j++) {
				level[i][j] = room[index][jndex];
				console.log(i, j, index, jndex)
				jndex++;

				// room[index].forEach((cell, jndex) => {
				// 	level[i][j] = cell
				// 	// console.log(level[i][j])
				// })
			}
		})
	}

	console.log('ere', level);

}




////////

const level = createLevelShell();

placeFirstRoom(level);
