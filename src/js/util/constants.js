// export const player = '🌚';
// export const wallTile = '🌳';
// export const pathTile = '🌱';


export const NORTH = 'n';
export const EAST = 'e';
export const SOUTH = 's';
export const WEST = 'w';

export const DEFAULT_EXIT_SIZE = 2;

export const DEFAULT_PATH_TILE = {
	sprite: '🌱',
	walkable: true,
	breakable: false,
	distance: 0
}

export const DEFAULT_WALL_TILE = {
	sprite: '🌳',
	walkable: false,
	breakable: true,
	damage: 100,
	distance: 0
}