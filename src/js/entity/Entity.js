import {
	whatIsTile,
	isTileWalkAble,
	resetTile,
	currentRoom,
	isTileWalkable
} from "../world/generateRoom";
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
	}

	// Return things
	adjTile(direction) {
		if (direction == c.NORTH) return currentRoom[this.posX - 1][this.posY];
		if (direction == c.SOUTH) return currentRoom[this.posX + 1][this.posY];
		if (direction == c.WEST) return currentRoom[this.posX][this.posY - 1];
		if (direction == c.EAST) return currentRoom[this.posX][this.posY + 1];
	}

	// Do things
	insertHere(x, y) {
		currentRoom[x][y] = this;
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
		resetTile(this.posX, this.posY);
		if (direction == c.NORTH && isTileWalkable(this.adjTile(c.NORTH))) this.posX--;
		if (direction == c.SOUTH && isTileWalkable(this.adjTile(c.SOUTH))) this.posX++;
		if (direction == c.WEST && isTileWalkable(this.adjTile(c.WEST))) this.posY--;
		if (direction == c.EAST && isTileWalkable(this.adjTile(c.EAST))) this.posY++;
		this.reInsert();
		draw();
	}

	attack(direction) {

	}

	destroy() {

	}
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
