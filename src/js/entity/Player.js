import Entity from './Entity';

export default class Player extends Entity {
	constructor(sprite) {
		super();
		if (sprite) this.sprite = sprite;
	}


}
