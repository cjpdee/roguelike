import Player from "./entity/Player";
import {
	testingLevel
} from "./world/generateLevel";
import * as c from "./util/constants";


var Game = {
	world: [],
	entities: [],
	enemies: [],
	time: 0,

	tick: function () {
		console.log(this.enemies)
		this.enemies.forEach(entity => {
			entity.move(c.NORTH)
		})
		this.time++;
	},

	worldMethods: {
		resetTile: function (x, y) {
			testingLevel[x][y] = c.DEFAULT_PATH_TILE;
		}
	}
}

export default Game;
