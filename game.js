const player = '🌚';
const wallTile = '🌳';
const pathTile = '🌱';

const DEFAULT_MAX_LEVEL_SIZE = 30;
const DEFAULT_MIN_LEVEL_SIZE = 4;
const DEFAULT_EXIT_SIZE = 2;
const NORTH = 'n';
const EAST = 'e';
const SOUTH = 's';
const WEST = 'w';

var playerPos = [1, 1];

var game = insertExit(insertExit(generateRandomLevel(), SOUTH), NORTH);

function randomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min
}

function randomLevelSize() {
	return randomInt(DEFAULT_MIN_LEVEL_SIZE, DEFAULT_MAX_LEVEL_SIZE)
}

function levelShell(w, h) {
	var shell = [];
	var row = [];

	for (let j = 0; j < h; j++) {
		if (j == 0 || j == (h - 1)) {
			// Create a row of only walls
			shell.push(Array(w).fill(wallTile));
		} else {
			// Create a row with walls on either side
			for (let i = 0; i < w; i++) {
				if (i == 0 || i == (w - 1)) {
					row.push(wallTile);
				} else row.push(pathTile);
			}
			shell.push(row);
			row = [];
		};
	}

	return shell
}

function insertExitXAxis(level, rowIndex) {
	var borderRange = level[rowIndex].length - 1;
	var where = randomInt(1, borderRange - DEFAULT_EXIT_SIZE);

	level[rowIndex].splice(where, DEFAULT_EXIT_SIZE, pathTile, pathTile)
	return level
}

function insertExitYAxis(level, colIndex) {

}

function insertExit(level, direction) {
	if (direction == NORTH) {
		return insertExitXAxis(level, 0)
	} else if (direction == SOUTH) {
		return insertExitXAxis(level, level.length - 1)
	}
}

function generateRandomLevel() {
	var shell = levelShell(randomLevelSize(), randomLevelSize())
	return shell
}

function buildLevel() {
	/*
		Parameters:
		an array of directions where there can be exits
		an array of monsters
		an 
	*/
}




function insertPlayerFirstAvailableSpace() {
	var pos = [];
	game.find((row, index1) => {
		if (row.find((space, index2) => {
				if (space === pathTile && pos.length < 2) {
					pos.push(index1);
					pos.push(index2);
					return
				}
			})) return
	})
	game[pos[0]][pos[1]] = player;
}

function insertPlayerToSpace(x, y) {
	game[x][y] = player;
}

function insertPlayer() {
	insertPlayerToSpace(playerPos[0], playerPos[1]);
}

function resetTile(x, y) {
	game[x][y] = pathTile;
}

function getPlayerPos() {
	game.find(row => {
		return row.find(space => space == player)
	})
}

function movePlayer(direction) {
	resetTile(playerPos[0], playerPos[1]);
	if (direction == 'w' && game[playerPos[0] - 1][playerPos[1]] != wallTile) playerPos[0]--;
	if (direction == 's' && game[playerPos[0] + 1][playerPos[1]] != wallTile) playerPos[0]++;
	if (direction == 'a' && game[playerPos[0]][playerPos[1] - 1] != wallTile) playerPos[1]--;
	if (direction == 'd' && game[playerPos[0]][playerPos[1] + 1] != wallTile) playerPos[1]++;
	insertPlayer();
	draw();
}

function draw() {
	var screen = document.getElementById("game");
	screen.innerHTML = '';
	game.forEach(row => {
		var div = document.createElement('p');
		div.innerHTML = row.toString().replace(/,/g, '');
		screen.appendChild(div);
	});
}

function initEvtListeners() {
	document.addEventListener('keydown', (e) => {
		e.key == "w" && movePlayer('w');
		e.key == "s" && movePlayer('s');
		e.key == "a" && movePlayer('a');
		e.key == "d" && movePlayer('d');

	})
}

initEvtListeners();
// insertPlayerFirstAvailableSpace();
insertPlayerToSpace(1, 1);
draw();
