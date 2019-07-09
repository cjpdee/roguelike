import Game from "../Game";
import {
	whatIsTile,
	currentRoom,
	isTileWalkable
} from "../world/generateRoom";
import {
	testingLevel,
	tileIsWalkable
} from "../world/generateLevel"; // f+replace testingLevel with the actual level
import * as c from "../util/constants";
import {
	draw
} from "../app.js";

export default class Entity {
	constructor() {
		this.health = 100;
		this.attack = 5;
		this.sprite = '😍';
		this.posX = 1;
		this.posY = 1;
		this.viewDistance = 10;
		this.walkable = false;
	}

	// Return things
	adjTile(direction) {
		if (direction == c.NORTH) return testingLevel[this.posX - 1][this.posY];
		if (direction == c.SOUTH) return testingLevel[this.posX + 1][this.posY];
		if (direction == c.WEST) return testingLevel[this.posX][this.posY - 1];
		if (direction == c.EAST) return testingLevel[this.posX][this.posY + 1];
	}

	// Do things
	insertHere(x, y) {
		testingLevel[x][y] = this;
		this.posX = x;
		this.posY = y;
	}

	reInsert() {
		this.insertHere(this.posX, this.posY);
	}

	/**
	 * Instead of c.wallTile, it should retrieve what the next tile is and access it's "walkable" property
	 * Tiles can be objects I guess
	 */

	move(direction) {
		// console.log(tileIsWalkable(this.adjTile(c.EAST)));
		console.log(this.adjTile(direction))
		Game.worldMethods.resetTile(this.posX, this.posY);
		if (direction == c.NORTH && this.adjTile(direction).walkable) this.posX--;
		if (direction == c.SOUTH && this.adjTile(direction).walkable) this.posX++;
		if (direction == c.WEST && this.adjTile(direction).walkable) this.posY--;
		if (direction == c.EAST && this.adjTile(direction).walkable) this.posY++;
		this.reInsert();
		draw();
	}

	attack(direction) {

	}

	destroy() {

	}
}


// export function movePlayer(direction) {
// 	Game.worldMethods.resetTile(playerPos[0], playerPos[1]);
// 	if (direction == c.NORTH && testingLevel[playerPos[0] - 1][playerPos[1]].walkable) playerPos[0]--;
// 	if (direction == c.SOUTH && testingLevel[playerPos[0] + 1][playerPos[1]].walkable) playerPos[0]++;
// 	if (direction == c.WEST && testingLevel[playerPos[0]][playerPos[1] - 1].walkable) playerPos[1]--;
// 	if (direction == c.EAST && testingLevel[playerPos[0]][playerPos[1] + 1].walkable) playerPos[1]++;
// 	insertPlayer();
// 	draw();
// }
