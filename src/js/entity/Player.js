import Entity from './Entity';
import Game from "../Game";

export default class Player extends Entity {
	constructor(sprite) {
		super();
		if (sprite) this.sprite = sprite;
	}

	movePlayer(direction) {
		this.move(direction);
		Game.tick();
		// console.log(Game.time);
	}

}
