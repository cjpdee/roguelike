// import './world/generateRoom';
import * as c from "./util/constants";

import {
	currentRoom,
	insertPlayerToSpace,
	movePlayer
} from './world/generateRoom';
import {
	createLevelShell,
	testingLevel,
	tileIsWalkable
} from "./world/generateLevel";
import Player from "./entity/Player";
import Enemy from "./entity/Enemy";

var player = new Player();

export function draw() {
	var screen = document.getElementById('game');
	screen.innerHTML = '';

	// TODO: replace with actual level
	testingLevel.forEach((row, index) => {
		// I'm worried this loop is terribly inefficient / unnecessary
		var renderRow = [];
		row.forEach((cell, jndex) => {
			if (cell == null) {
				renderRow.push('⬜️');
			} else if (typeof cell == 'object') {
				renderRow.push(cell.sprite)
			} else renderRow.push(cell);
		})

		var div = document.createElement('p');
		div.innerHTML = renderRow.toString().replace(/,/g, '');
		screen.appendChild(div);
	});
}

// TODO: change to inputHandler() in new file
function initEvtListeners() {
	document.addEventListener('keydown', (e) => {
		e.key == 'w' && player.movePlayer(c.NORTH);
		e.key == 's' && player.movePlayer(c.SOUTH);
		e.key == 'a' && player.movePlayer(c.WEST);
		e.key == 'd' && player.movePlayer(c.EAST);
		e.key == 'ArrowUp' && enemy.move(c.NORTH);
		e.key == 'ArrowDown' && enemy.move(c.SOUTH);
		e.key == 'ArrowLeft' && enemy.move(c.WEST);
		e.key == 'ArrowRight' && enemy.move(c.EAST);
	});
}


function fillShortestPath(level, startX, startY, endX, endY, maxDistance = 1000) {
	var board = Array.from(level);
	var emptyTileList = [
		[startX, startY]
	];
	var distance = 0;

	while (emptyTileList.length > 0) {

		var currentPos = emptyTileList.pop();
		var currentCell = board[currentPos[1]][currentPos[0]];

		var neighbors = [
			[-1, 0],
			[1, 0],
			[0, -1],
			[0, 1]
		];

		neighbors.forEach(neighbor => {
			console.log(currentCell);
			console.log('pos Y: ', currentPos[1] + neighbor[1])
			console.log('pos X: ', currentPos[0] + neighbor[0])

			let newPosY = currentPos[1] + neighbor[1];
			let newPosX = currentPos[0] + neighbor[0];

			if (newPosY > -1 && newPosX > -1) {

				if (tileIsWalkable(level, newPosX, newPosY)) {
					emptyTileList.push([newPosX, newPosY]);
					distance = level[newPosY][newPosX].distance + 1;

					// if distance from this tile is greater than distance
					// if(level[newPosY][newPosX].distance > distance) {

					// }

					level[newPosY][newPosX] = '⬛️'
				}
			}
			// distance calc here



			// console.log(level[currentPos[1 + neighbor[1]][currentPos[0 + neighbor[0]]]]);
		})
	}
}



initEvtListeners();
var player = new Player('🥶');
var enemy = new Enemy('👾');
player.insertHere(10, 10);
fillShortestPath(testingLevel, 10, 10, 10, 20)
draw()
