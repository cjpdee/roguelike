// import './world/generateLevel';
import * as c from "./util/constants";

import {
	currentLevel,
	insertPlayerToSpace,
	movePlayer
} from './world/generateLevel';
import Entity from "./entity/Entity";
import Player from "./entity/Player";

var player = new Player();



export function draw() {
	var screen = document.getElementById('game');
	screen.innerHTML = '';
	currentLevel.forEach((row) => {
		var div = document.createElement('p');
		div.innerHTML = row.toString().replace(/,/g, '');
		screen.appendChild(div);
	});
}


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


// var man = new Entity();

// console.log(man)
