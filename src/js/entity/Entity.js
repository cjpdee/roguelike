import {
	resetTile,
	currentLevel
} from "../world/generateLevel";
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
	}

	insertHere(posX, posY) {
		currentLevel[posX][posY] = this.sprite;
		this.posX = posX;
		this.posY = posY;
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
		if (direction == c.NORTH && currentLevel[this.posX - 1][this.posY] != c.wallTile) this.posX--;
		if (direction == c.SOUTH && currentLevel[this.posX + 1][this.posY] != c.wallTile) this.posX++;
		if (direction == c.WEST && currentLevel[this.posX][this.posY - 1] != c.wallTile) this.posY--;
		if (direction == c.EAST && currentLevel[this.posX][this.posY + 1] != c.wallTile) this.posY++;
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
