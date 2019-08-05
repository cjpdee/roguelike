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
		this.breakable = false;
		this.digStr = 50;
	}

	// Return tile next to this entity in (direction)
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

	// needs refactoring
	move(direction) {
		Game.worldMethods.resetTile(this.posX, this.posY);
		if (direction == c.NORTH && this.adjTile(direction).walkable) this.posX--;
		// idea for breaking blocks
		else if (direction == c.NORTH && this.adjTile(direction).breakable) this.dig(this.adjTile(direction));

		if (direction == c.SOUTH && this.adjTile(direction).walkable) this.posX++;
		else if (direction == c.SOUTH && this.adjTile(direction).breakable) this.dig(this.adjTile(direction));

		if (direction == c.WEST && this.adjTile(direction).walkable) this.posY--;
		else if (direction == c.WEST && this.adjTile(direction).breakable) this.dig(this.adjTile(direction));

		if (direction == c.EAST && this.adjTile(direction).walkable) this.posY++;
		else if (direction == c.EAST && this.adjTile(direction).breakable) this.dig(this.adjTile(direction));
		this.reInsert();
		draw();
	}

	dig(tile) {
		tile.damage -= this.digStr;
		if (tile.damage <= 0) {
			console.log('broken', tile)
			tile.convertToPath();
		} else {
			console.log('unbroken', tile)
		}
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
