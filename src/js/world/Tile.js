const DEFAULT_PATH_TILE = {
	sprite: '🌱',
	walkable: true,
	breakable: false,
	distance: 0
}

const DEFAULT_WALL_TILE = {
	sprite: '🌳',
	walkable: false,
	breakable: true,
	damage: 100,
	distance: 0
}

export class Tile {
	constructor(sprite, walkable, breakable, damage) {
		this.sprite = sprite;
		this.walkable = walkable;
		this.breakable = breakable;
		this.damage = damage;
	}

	convertToPath() {
		this.sprite = DEFAULT_PATH_TILE.sprite;
		this.walkable = true;
		this.breakable = false;
	}
}

export const WALL_TILE = function () {
	return new Tile('🌳', false, true, 100);
}

export const PATH_TILE = function () {
	return new Tile('🌱', true, false, 0);
}