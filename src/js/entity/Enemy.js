import Entity from './Entity';

export default class Enemy extends Entity {
	constructor(name, health, attack, sprite) {
		super(health, attack);
		this.name = name;
		this.sprite = sprite;
	}


}
