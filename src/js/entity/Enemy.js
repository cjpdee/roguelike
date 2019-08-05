import Entity from './Entity';
import Game from "../Game";

export default class Enemy extends Entity {
	constructor(sprite, name, health, attack) {
		super(health, attack);
		this.name = name;
		this.sprite = sprite;
		// console.log(Game.enemies.push(this))
		// console.log(Game.enemies)

		this.insertHere(20, 20);
	}
}
