// import './world/generateRoom';
import * as c from "./util/constants";

import {
	currentRoom,
	insertPlayerToSpace,
	movePlayer
} from './world/generateRoom';
import {
	createLevelShell
} from "./world/generateLevel";
import Player from "./entity/Player";

var player = new Player();

export function draw() {
	var screen = document.getElementById('game');
	screen.innerHTML = '';

	currentRoom.forEach((row, index) => {
		// I'm worried this loop is terribly inefficient / unnecessary
		var renderRow = [];
		row.forEach((cell, jndex) => {
			if (typeof cell == 'object') {
				renderRow.push(cell.sprite)
			} else renderRow.push(cell);
		})

		var div = document.createElement('p');
		div.innerHTML = renderRow.toString().replace(/,/g, '');
		screen.appendChild(div);
	});
	// console.log('not mut', currentRoom)
}

// TODO: change to inputHandler() in new file
function initEvtListeners() {
	document.addEventListener('keydown', (e) => {
		e.key == 'w' && player.move(c.NORTH);
		e.key == 's' && player.move(c.SOUTH);
		e.key == 'a' && player.move(c.WEST);
		e.key == 'd' && player.move(c.EAST);
		e.key == 'ArrowUp' && person.move(c.NORTH);
		e.key == 'ArrowDown' && person.move(c.SOUTH);
		e.key == 'ArrowLeft' && person.move(c.WEST);
		e.key == 'ArrowRight' && person.move(c.EAST);
	});
}



initEvtListeners();
// insertPlayerFirstAvailableSpace();
// insertPlayerToSpace(1, 1);
// draw();
var person = new Player('👿');
console.log(person);
player.insertHere(2, 1)
person.insertHere(4, 4)
draw()

// console.log(createLevelShell())

// var man = new Entity();

// console.log(man)
