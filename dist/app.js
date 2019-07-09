/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/Game.js":
/*!************************!*\
  !*** ./src/js/Game.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _entity_Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity/Player */ "./src/js/entity/Player.js");
/* harmony import */ var _world_generateLevel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./world/generateLevel */ "./src/js/world/generateLevel.js");
/* harmony import */ var _util_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/constants */ "./src/js/util/constants.js");



var Game = {
  world: [],
  entities: [],
  enemies: [],
  time: 0,
  tick: function tick() {
    console.log(this.enemies);
    this.enemies.forEach(function (entity) {
      entity.move(_util_constants__WEBPACK_IMPORTED_MODULE_2__["NORTH"]);
    });
    this.time++;
  },
  worldMethods: {
    resetTile: function resetTile(x, y) {
      _world_generateLevel__WEBPACK_IMPORTED_MODULE_1__["testingLevel"][x][y] = _util_constants__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_PATH_TILE"];
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Game);

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! exports provided: draw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "draw", function() { return draw; });
/* harmony import */ var _util_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/constants */ "./src/js/util/constants.js");
/* harmony import */ var _world_generateRoom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./world/generateRoom */ "./src/js/world/generateRoom.js");
/* harmony import */ var _world_generateLevel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./world/generateLevel */ "./src/js/world/generateLevel.js");
/* harmony import */ var _entity_Player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./entity/Player */ "./src/js/entity/Player.js");
/* harmony import */ var _entity_Enemy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./entity/Enemy */ "./src/js/entity/Enemy.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// import './world/generateRoom';





var player = new _entity_Player__WEBPACK_IMPORTED_MODULE_3__["default"]();
function draw() {
  var screen = document.getElementById('game');
  screen.innerHTML = ''; // TODO: replace with actual level

  _world_generateLevel__WEBPACK_IMPORTED_MODULE_2__["testingLevel"].forEach(function (row, index) {
    // I'm worried this loop is terribly inefficient / unnecessary
    var renderRow = [];
    row.forEach(function (cell, jndex) {
      if (cell == null) {
        renderRow.push('⬜️');
      } else if (_typeof(cell) == 'object') {
        renderRow.push(cell.sprite);
      } else renderRow.push(cell);
    });
    var div = document.createElement('p');
    div.innerHTML = renderRow.toString().replace(/,/g, '');
    screen.appendChild(div);
  });
} // TODO: change to inputHandler() in new file

function initEvtListeners() {
  document.addEventListener('keydown', function (e) {
    e.key == 'w' && player.movePlayer(_util_constants__WEBPACK_IMPORTED_MODULE_0__["NORTH"]);
    e.key == 's' && player.movePlayer(_util_constants__WEBPACK_IMPORTED_MODULE_0__["SOUTH"]);
    e.key == 'a' && player.movePlayer(_util_constants__WEBPACK_IMPORTED_MODULE_0__["WEST"]);
    e.key == 'd' && player.movePlayer(_util_constants__WEBPACK_IMPORTED_MODULE_0__["EAST"]);
    e.key == 'ArrowUp' && enemy.move(_util_constants__WEBPACK_IMPORTED_MODULE_0__["NORTH"]);
    e.key == 'ArrowDown' && enemy.move(_util_constants__WEBPACK_IMPORTED_MODULE_0__["SOUTH"]);
    e.key == 'ArrowLeft' && enemy.move(_util_constants__WEBPACK_IMPORTED_MODULE_0__["WEST"]);
    e.key == 'ArrowRight' && enemy.move(_util_constants__WEBPACK_IMPORTED_MODULE_0__["EAST"]);
  });
}

function fillShortestPath(level, startX, startY, endX, endY) {
  var maxDistance = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1000;
  var board = Array.from(level);
  var emptyTileList = [[startX, startY]];
  var distance = 0;

  while (emptyTileList.length > 0) {
    var currentPos = emptyTileList.pop();
    var currentCell = board[currentPos[1]][currentPos[0]];
    var neighbors = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    neighbors.forEach(function (neighbor) {
      console.log(currentCell);
      console.log('pos Y: ', currentPos[1] + neighbor[1]);
      console.log('pos X: ', currentPos[0] + neighbor[0]);
      var newPosY = currentPos[1] + neighbor[1];
      var newPosX = currentPos[0] + neighbor[0];

      if (newPosY > -1 && newPosX > -1) {
        if (Object(_world_generateLevel__WEBPACK_IMPORTED_MODULE_2__["tileIsWalkable"])(level, newPosX, newPosY)) {
          emptyTileList.push([newPosX, newPosY]);
          distance = level[newPosY][newPosX].distance + 1; // if distance from this tile is greater than distance
          // if(level[newPosY][newPosX].distance > distance) {
          // }

          level[newPosY][newPosX] = '⬛️';
        }
      } // distance calc here
      // console.log(level[currentPos[1 + neighbor[1]][currentPos[0 + neighbor[0]]]]);

    });
  }
}

initEvtListeners();
var player = new _entity_Player__WEBPACK_IMPORTED_MODULE_3__["default"]('🥶');
var enemy = new _entity_Enemy__WEBPACK_IMPORTED_MODULE_4__["default"]('👾');
player.insertHere(15, 15);
fillShortestPath(_world_generateLevel__WEBPACK_IMPORTED_MODULE_2__["testingLevel"], 10, 10, 10, 20);
draw();

/***/ }),

/***/ "./src/js/entity/Enemy.js":
/*!********************************!*\
  !*** ./src/js/entity/Enemy.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Enemy; });
/* harmony import */ var _Entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Entity */ "./src/js/entity/Entity.js");
/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Game */ "./src/js/Game.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Enemy =
/*#__PURE__*/
function (_Entity) {
  _inherits(Enemy, _Entity);

  function Enemy(sprite, name, health, attack) {
    var _this;

    _classCallCheck(this, Enemy);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Enemy).call(this, health, attack));
    _this.name = name;
    _this.sprite = sprite;
    console.log(_Game__WEBPACK_IMPORTED_MODULE_1__["default"].enemies.push(_assertThisInitialized(_this)));
    console.log(_Game__WEBPACK_IMPORTED_MODULE_1__["default"].enemies);

    _this.insertHere(20, 20);

    return _this;
  }

  return Enemy;
}(_Entity__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/js/entity/Entity.js":
/*!*********************************!*\
  !*** ./src/js/entity/Entity.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Entity; });
/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Game */ "./src/js/Game.js");
/* harmony import */ var _world_generateRoom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../world/generateRoom */ "./src/js/world/generateRoom.js");
/* harmony import */ var _world_generateLevel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../world/generateLevel */ "./src/js/world/generateLevel.js");
/* harmony import */ var _util_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/constants */ "./src/js/util/constants.js");
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.js */ "./src/js/app.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



 // f+replace testingLevel with the actual level




var Entity =
/*#__PURE__*/
function () {
  function Entity() {
    _classCallCheck(this, Entity);

    this.health = 100;
    this.attack = 5;
    this.sprite = '😍';
    this.posX = 1;
    this.posY = 1;
    this.viewDistance = 10;
    this.walkable = false;
  } // Return things


  _createClass(Entity, [{
    key: "adjTile",
    value: function adjTile(direction) {
      if (direction == _util_constants__WEBPACK_IMPORTED_MODULE_3__["NORTH"]) return _world_generateLevel__WEBPACK_IMPORTED_MODULE_2__["testingLevel"][this.posX - 1][this.posY];
      if (direction == _util_constants__WEBPACK_IMPORTED_MODULE_3__["SOUTH"]) return _world_generateLevel__WEBPACK_IMPORTED_MODULE_2__["testingLevel"][this.posX + 1][this.posY];
      if (direction == _util_constants__WEBPACK_IMPORTED_MODULE_3__["WEST"]) return _world_generateLevel__WEBPACK_IMPORTED_MODULE_2__["testingLevel"][this.posX][this.posY - 1];
      if (direction == _util_constants__WEBPACK_IMPORTED_MODULE_3__["EAST"]) return _world_generateLevel__WEBPACK_IMPORTED_MODULE_2__["testingLevel"][this.posX][this.posY + 1];
    } // Do things

  }, {
    key: "insertHere",
    value: function insertHere(x, y) {
      _world_generateLevel__WEBPACK_IMPORTED_MODULE_2__["testingLevel"][x][y] = this;
      this.posX = x;
      this.posY = y;
    }
  }, {
    key: "reInsert",
    value: function reInsert() {
      this.insertHere(this.posX, this.posY);
    }
    /**
     * Instead of c.wallTile, it should retrieve what the next tile is and access it's "walkable" property
     * Tiles can be objects I guess
     */

  }, {
    key: "move",
    value: function move(direction) {
      // console.log(tileIsWalkable(this.adjTile(c.EAST)));
      console.log(this.adjTile(direction));
      _Game__WEBPACK_IMPORTED_MODULE_0__["default"].worldMethods.resetTile(this.posX, this.posY);
      if (direction == _util_constants__WEBPACK_IMPORTED_MODULE_3__["NORTH"] && this.adjTile(direction).walkable) this.posX--;
      if (direction == _util_constants__WEBPACK_IMPORTED_MODULE_3__["SOUTH"] && this.adjTile(direction).walkable) this.posX++;
      if (direction == _util_constants__WEBPACK_IMPORTED_MODULE_3__["WEST"] && this.adjTile(direction).walkable) this.posY--;
      if (direction == _util_constants__WEBPACK_IMPORTED_MODULE_3__["EAST"] && this.adjTile(direction).walkable) this.posY++;
      this.reInsert();
      Object(_app_js__WEBPACK_IMPORTED_MODULE_4__["draw"])();
    }
  }, {
    key: "attack",
    value: function attack(direction) {}
  }, {
    key: "destroy",
    value: function destroy() {}
  }]);

  return Entity;
}(); // export function movePlayer(direction) {
// 	Game.worldMethods.resetTile(playerPos[0], playerPos[1]);
// 	if (direction == c.NORTH && testingLevel[playerPos[0] - 1][playerPos[1]].walkable) playerPos[0]--;
// 	if (direction == c.SOUTH && testingLevel[playerPos[0] + 1][playerPos[1]].walkable) playerPos[0]++;
// 	if (direction == c.WEST && testingLevel[playerPos[0]][playerPos[1] - 1].walkable) playerPos[1]--;
// 	if (direction == c.EAST && testingLevel[playerPos[0]][playerPos[1] + 1].walkable) playerPos[1]++;
// 	insertPlayer();
// 	draw();
// }




/***/ }),

/***/ "./src/js/entity/Player.js":
/*!*********************************!*\
  !*** ./src/js/entity/Player.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Player; });
/* harmony import */ var _Entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Entity */ "./src/js/entity/Entity.js");
/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Game */ "./src/js/Game.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Player =
/*#__PURE__*/
function (_Entity) {
  _inherits(Player, _Entity);

  function Player(sprite) {
    var _this;

    _classCallCheck(this, Player);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Player).call(this));
    if (sprite) _this.sprite = sprite;
    return _this;
  }

  _createClass(Player, [{
    key: "movePlayer",
    value: function movePlayer(direction) {
      this.move(direction);
      _Game__WEBPACK_IMPORTED_MODULE_1__["default"].tick();
      console.log(_Game__WEBPACK_IMPORTED_MODULE_1__["default"].time);
    }
  }]);

  return Player;
}(_Entity__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/js/util/constants.js":
/*!**********************************!*\
  !*** ./src/js/util/constants.js ***!
  \**********************************/
/*! exports provided: player, wallTile, pathTile, NORTH, EAST, SOUTH, WEST, DEFAULT_EXIT_SIZE, DEFAULT_PATH_TILE, DEFAULT_WALL_TILE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "player", function() { return player; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wallTile", function() { return wallTile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pathTile", function() { return pathTile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NORTH", function() { return NORTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EAST", function() { return EAST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SOUTH", function() { return SOUTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEST", function() { return WEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_EXIT_SIZE", function() { return DEFAULT_EXIT_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_PATH_TILE", function() { return DEFAULT_PATH_TILE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_WALL_TILE", function() { return DEFAULT_WALL_TILE; });
var player = '🌚';
var wallTile = '🌳';
var pathTile = '🌱';
var NORTH = 'n';
var EAST = 'e';
var SOUTH = 's';
var WEST = 'w';
var DEFAULT_EXIT_SIZE = 2;
var DEFAULT_PATH_TILE = {
  sprite: '🌱',
  walkable: true,
  distance: 0
};
var DEFAULT_WALL_TILE = {
  sprite: '🌳',
  walkable: false,
  distance: 0
};

/***/ }),

/***/ "./src/js/util/helper.js":
/*!*******************************!*\
  !*** ./src/js/util/helper.js ***!
  \*******************************/
/*! exports provided: randomInt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomInt", function() { return randomInt; });
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

/***/ }),

/***/ "./src/js/world/generateLevel.js":
/*!***************************************!*\
  !*** ./src/js/world/generateLevel.js ***!
  \***************************************/
/*! exports provided: createLevelShell, tileIsWalkable, testingLevel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLevelShell", function() { return createLevelShell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tileIsWalkable", function() { return tileIsWalkable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testingLevel", function() { return testingLevel; });
/* harmony import */ var _generateRoom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generateRoom */ "./src/js/world/generateRoom.js");
/* harmony import */ var _util_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/helper */ "./src/js/util/helper.js");


var LEVEL_SIZE = 32;

function createLevel() {
  var numRooms = 0;
}

function createLevelShell() {
  var row = function row() {
    return Array(LEVEL_SIZE).fill(null);
  };

  var level = [];

  for (var i = 0; i < LEVEL_SIZE; i++) {
    level.push(row());
  }

  return level;
}

function placeFirstRoom(level) {
  var x = Object(_util_helper__WEBPACK_IMPORTED_MODULE_1__["randomInt"])(0, LEVEL_SIZE);
  var y = Object(_util_helper__WEBPACK_IMPORTED_MODULE_1__["randomInt"])(0, LEVEL_SIZE); // console.log('new room location:', x, y);

  var room = _generateRoom__WEBPACK_IMPORTED_MODULE_0__["createRoom"](); // room = r.currentRoom; // TODO: remove later

  return roomFitsInLevelBoundaries(level, room, x, y) ? spliceRoomIntoLevel(level, room, x, y) : placeFirstRoom(level);
} // Checks if room fits within the current level


function roomFitsInLevelBoundaries(level, room, x, y) {
  // X axis fits?
  if (x + room[0].length > LEVEL_SIZE - 1) {
    // console.log('Room could not be placed - X');
    console.log(x, room[0].length);
    return false;
  } // Y axis fits?


  if (y + room.length > LEVEL_SIZE - 1) {
    // console.log('Room could not be placed - Y');
    console.log(y, room.length);
    return false;
  }

  return true;
}

function placeRoomInRemainingSpace(level, numRooms) {
  numRooms = 80;

  for (var i = 0; i < numRooms; i++) {
    var newRoom = _generateRoom__WEBPACK_IMPORTED_MODULE_0__["createRoom"]();
    var newRoomX = Object(_util_helper__WEBPACK_IMPORTED_MODULE_1__["randomInt"])(0, LEVEL_SIZE);
    var newRoomY = Object(_util_helper__WEBPACK_IMPORTED_MODULE_1__["randomInt"])(0, LEVEL_SIZE); // console.log(newRoomY, newRoomX, newRoom);
    // console.log('height: ' + newRoom.length)
    // console.log('width: ' + newRoom[0].length)

    checkAreaIsClear(level, newRoomX, newRoomY, newRoom[0].length, newRoom.length) && spliceRoomIntoLevel(level, newRoom, newRoomX, newRoomY);
  }

  return level;
}

function checkAreaIsClear(level, x, y, width, height) {
  if (y + height > LEVEL_SIZE || x + width > LEVEL_SIZE) {
    return false;
  } // test if start + end columns are empty


  for (var counterY = 0; counterY < height; counterY++) {
    return isCellEmpty(level, x, counterY); // console.log("Cell at Y = " + y + counterY, "Left column");
  }

  for (var _counterY = 0; _counterY < height; _counterY++) {
    return isCellEmpty(level, x + width + 1, _counterY); //console.log("Cell at Y = " + y + counterY, "Right column");
  } // test if start + end rows are empty


  for (var counterX = 0; counterX < height; counterX++) {
    return isCellEmpty(level, counterX, y); // console.log("Cell at Y = " + y + counterX, "Left column");
  }

  for (var _counterX = 0; _counterX < height; _counterX++) {
    return isCellEmpty(level, _counterX, y + height + 1); //console.log("Cell at Y = " + y + counterY, "Right column");
  }
}

function isCellEmpty(level, x, y) {
  return level[y][x] === null;
}

function tileIsWalkable(level, x, y) {
  if (level.length > y && level[0].length > x) {
    if (level[y][x] != null) {
      return level[y][x].walkable;
    }
  } else return false;
} // Splice function (doesn't check if valid)

function spliceRoomIntoLevel(level, room, x, y) {
  var index = room.length - 1;

  for (var i = y + room.length; i > y; i--) {
    var jndex = room[index].length - 1;

    for (var j = x + room[index].length; j > x; j--) {
      level[i - 1][j - 1] = room[index][jndex];
      jndex--;
    }

    index--;
  } // console.log('ere', level);


  return level;
}
/**
 * Next:
 * Create a function which finds out if there are any spaces
 * within the matrix that can contain room
 * If not, try again
 * If so, place it in a random range within the available space
 * e.g. availableSpaceWidth - roomWidth = rangeX
 * availableSpaceWidthMin = row[-1] until it hits something that is not null
 */
////////


var level = createLevelShell();
var testingLevel = placeRoomInRemainingSpace(placeRoomInRemainingSpace(placeFirstRoom(createLevelShell())));

/***/ }),

/***/ "./src/js/world/generateRoom.js":
/*!**************************************!*\
  !*** ./src/js/world/generateRoom.js ***!
  \**************************************/
/*! exports provided: currentRoom, createRoom, generateRandomRoom, whatIsTile, isTileWalkable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentRoom", function() { return currentRoom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRoom", function() { return createRoom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateRandomRoom", function() { return generateRandomRoom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whatIsTile", function() { return whatIsTile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTileWalkable", function() { return isTileWalkable; });
/* harmony import */ var _util_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/helper */ "./src/js/util/helper.js");
/* harmony import */ var _util_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/constants */ "./src/js/util/constants.js");
/* harmony import */ var _room_insertExits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./room/insertExits */ "./src/js/world/room/insertExits.js");
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.js */ "./src/js/app.js");




var DEFAULT_MAX_ROOM_SIZE = 10;
var DEFAULT_MIN_ROOM_SIZE = 5;
var DEFAULT_EXIT_SIZE = 2; // const WALL_TILES = [{
// 	sprite: '🌳',
// 	walkable: false
// }]; // Be careful of invisible characters
// const PATH_TILES = [{
// 	sprite: '🌱',
// 	walkable: true
// }];

var currentRoom = Object(_room_insertExits__WEBPACK_IMPORTED_MODULE_2__["insertExit"])(Object(_room_insertExits__WEBPACK_IMPORTED_MODULE_2__["insertExit"])(Object(_room_insertExits__WEBPACK_IMPORTED_MODULE_2__["insertExit"])(Object(_room_insertExits__WEBPACK_IMPORTED_MODULE_2__["insertExit"])(generateRandomShell(), _util_constants__WEBPACK_IMPORTED_MODULE_1__["SOUTH"]), _util_constants__WEBPACK_IMPORTED_MODULE_1__["NORTH"]), _util_constants__WEBPACK_IMPORTED_MODULE_1__["EAST"]), _util_constants__WEBPACK_IMPORTED_MODULE_1__["WEST"]);
var createRoom = function createRoom() {
  return Object(_room_insertExits__WEBPACK_IMPORTED_MODULE_2__["insertExit"])(Object(_room_insertExits__WEBPACK_IMPORTED_MODULE_2__["insertExit"])(Object(_room_insertExits__WEBPACK_IMPORTED_MODULE_2__["insertExit"])(Object(_room_insertExits__WEBPACK_IMPORTED_MODULE_2__["insertExit"])(generateRandomShell(), _util_constants__WEBPACK_IMPORTED_MODULE_1__["SOUTH"]), _util_constants__WEBPACK_IMPORTED_MODULE_1__["WEST"]), _util_constants__WEBPACK_IMPORTED_MODULE_1__["EAST"]), _util_constants__WEBPACK_IMPORTED_MODULE_1__["NORTH"]);
};
/**
 * ROOM GENERATION
 */

function randomRoomSize() {
  return Object(_util_helper__WEBPACK_IMPORTED_MODULE_0__["randomInt"])(DEFAULT_MIN_ROOM_SIZE, DEFAULT_MAX_ROOM_SIZE);
} // Create an empty matrix filled with path tiles & a wall tile border


function roomShell(w, h) {
  var shell = [];
  var row = [];

  for (var j = 0; j < h; j++) {
    if (j == 0 || j == h - 1) {
      // Create a row of only walls on top / bottom side
      shell.push(Array(w).fill(_util_constants__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_WALL_TILE"]));
    } else {
      // Create a row with walls on either side (to fill the space)
      for (var i = 0; i < w; i++) {
        if (i == 0 || i == w - 1) {
          row.push(_util_constants__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_WALL_TILE"]);
        } else row.push(_util_constants__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_PATH_TILE"]);
      }

      shell.push(row);
      row = [];
    }
  }

  return shell;
}

function generateRandomShell() {
  var shell = roomShell(randomRoomSize(), randomRoomSize());
  return shell;
}

function generateRandomRoom() {
  return Object(_room_insertExits__WEBPACK_IMPORTED_MODULE_2__["insertExit"])(Object(_room_insertExits__WEBPACK_IMPORTED_MODULE_2__["insertExit"])(Object(_room_insertExits__WEBPACK_IMPORTED_MODULE_2__["insertExit"])(Object(_room_insertExits__WEBPACK_IMPORTED_MODULE_2__["insertExit"])(generateRandomShell(), _util_constants__WEBPACK_IMPORTED_MODULE_1__["SOUTH"]), _util_constants__WEBPACK_IMPORTED_MODULE_1__["NORTH"]), _util_constants__WEBPACK_IMPORTED_MODULE_1__["EAST"]), _util_constants__WEBPACK_IMPORTED_MODULE_1__["WEST"]);
}
/**
 * INSERTING / MOVING PLAYER
 */
// move to new file

function whatIsTile(x, y) {
  return currentRoom[x][y];
} // move to new file

function isTileWalkable(tile) {
  return PATH_TILES.includes(tile) ? true : false;
}
/**
 * Some future thoughts:
 * Create a textbox that narrates what is happening
 */

/***/ }),

/***/ "./src/js/world/room/insertExits.js":
/*!******************************************!*\
  !*** ./src/js/world/room/insertExits.js ***!
  \******************************************/
/*! exports provided: insertExit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertExit", function() { return insertExit; });
/* harmony import */ var _util_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/constants */ "./src/js/util/constants.js");
/* harmony import */ var _util_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/helper */ "./src/js/util/helper.js");

 // Finds an acceptable 2x1 space and inserts it horizontally

function insertExitXAxis(room, side) {
  var rowIndex;
  side == _util_constants__WEBPACK_IMPORTED_MODULE_0__["NORTH"] ? rowIndex = 0 : rowIndex = room.length - 1;
  var borderRangeX = room[rowIndex].length - 1;
  var whereX = Object(_util_helper__WEBPACK_IMPORTED_MODULE_1__["randomInt"])(1, borderRangeX - _util_constants__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_EXIT_SIZE"]);
  room[rowIndex].splice(whereX, _util_constants__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_EXIT_SIZE"], _util_constants__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_PATH_TILE"], _util_constants__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_PATH_TILE"]);
  return room;
} // Finds an acceptable 2x1 space and inserts it vertically


function insertExitYAxis(room, side) {
  var colIndex;
  side == _util_constants__WEBPACK_IMPORTED_MODULE_0__["WEST"] ? colIndex = 0 : colIndex = room[0].length - 1;
  var borderRangeY = room.length - 1;
  var whereY = Object(_util_helper__WEBPACK_IMPORTED_MODULE_1__["randomInt"])(1, borderRangeY - _util_constants__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_EXIT_SIZE"]);
  var roomCopy = room.slice();

  function createRowWithExit(exitIndex) {
    var row = [];
    var roomWidth = room[0].length;

    for (var i = 0; i < roomWidth; i++) {
      var oppositeSideIndex;

      if (exitIndex == 0) {
        oppositeSideIndex = roomWidth - 1;
      } else oppositeSideIndex = 0;

      if (i == exitIndex) {
        row.push(_util_constants__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_PATH_TILE"]); // pathtile
      } else if (i != exitIndex && i == 0 || i == oppositeSideIndex) {
        row.push(_util_constants__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_WALL_TILE"]);
      } else row.push(_util_constants__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_PATH_TILE"]); // was pathtile

    } // FIXME: walls/paths are being overwritten by previous methods


    if (room[whereY][oppositeSideIndex] == _util_constants__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_PATH_TILE"]) {
      row[oppositeSideIndex] = _util_constants__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_PATH_TILE"];
    } // console.log(side, row);


    return row;
  }

  roomCopy.splice(whereY, _util_constants__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_EXIT_SIZE"], createRowWithExit(colIndex), createRowWithExit(colIndex));
  return roomCopy;
}

function insertExit(room, direction) {
  if (direction == _util_constants__WEBPACK_IMPORTED_MODULE_0__["NORTH"]) {
    return insertExitXAxis(room, _util_constants__WEBPACK_IMPORTED_MODULE_0__["NORTH"]);
  } else if (direction == _util_constants__WEBPACK_IMPORTED_MODULE_0__["SOUTH"]) {
    return insertExitXAxis(room, _util_constants__WEBPACK_IMPORTED_MODULE_0__["SOUTH"]);
  } else if (direction == _util_constants__WEBPACK_IMPORTED_MODULE_0__["EAST"]) {
    return insertExitYAxis(room, _util_constants__WEBPACK_IMPORTED_MODULE_0__["EAST"]);
  } else if (direction == _util_constants__WEBPACK_IMPORTED_MODULE_0__["WEST"]) {
    return insertExitYAxis(room, _util_constants__WEBPACK_IMPORTED_MODULE_0__["WEST"]);
  }
}

/***/ }),

/***/ 0:
/*!*****************************!*\
  !*** multi ./src/js/app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/charlie/Code/roguelike/src/js/app.js */"./src/js/app.js");


/***/ })

/******/ });