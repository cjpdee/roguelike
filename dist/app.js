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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// import './world/generateRoom';




var player = new _entity_Player__WEBPACK_IMPORTED_MODULE_3__["default"]();
function draw() {
  var screen = document.getElementById('game');
  screen.innerHTML = '';
  _world_generateRoom__WEBPACK_IMPORTED_MODULE_1__["currentRoom"].forEach(function (row, index) {
    // I'm worried this loop is terribly inefficient / unnecessary
    var renderRow = [];
    row.forEach(function (cell, jndex) {
      if (_typeof(cell) == 'object') {
        renderRow.push(cell.sprite);
      } else renderRow.push(cell);
    });
    var div = document.createElement('p');
    div.innerHTML = renderRow.toString().replace(/,/g, '');
    screen.appendChild(div);
  }); // console.log('not mut', currentRoom)
} // TODO: change to inputHandler() in new file

function initEvtListeners() {
  document.addEventListener('keydown', function (e) {
    e.key == 'w' && player.move(_util_constants__WEBPACK_IMPORTED_MODULE_0__["NORTH"]);
    e.key == 's' && player.move(_util_constants__WEBPACK_IMPORTED_MODULE_0__["SOUTH"]);
    e.key == 'a' && player.move(_util_constants__WEBPACK_IMPORTED_MODULE_0__["WEST"]);
    e.key == 'd' && player.move(_util_constants__WEBPACK_IMPORTED_MODULE_0__["EAST"]);
    e.key == 'ArrowUp' && person.move(_util_constants__WEBPACK_IMPORTED_MODULE_0__["NORTH"]);
    e.key == 'ArrowDown' && person.move(_util_constants__WEBPACK_IMPORTED_MODULE_0__["SOUTH"]);
    e.key == 'ArrowLeft' && person.move(_util_constants__WEBPACK_IMPORTED_MODULE_0__["WEST"]);
    e.key == 'ArrowRight' && person.move(_util_constants__WEBPACK_IMPORTED_MODULE_0__["EAST"]);
  });
}

initEvtListeners(); // insertPlayerFirstAvailableSpace();
// insertPlayerToSpace(1, 1);
// draw();

var person = new _entity_Player__WEBPACK_IMPORTED_MODULE_3__["default"]('👿');
console.log(person);
player.insertHere(2, 1);
person.insertHere(4, 4);
draw(); // console.log(createLevelShell())
// var man = new Entity();
// console.log(man)

/***/ }),

/***/ "./src/js/entity/Entity.js":
/*!*********************************!*\
  !*** ./src/js/entity/Entity.js ***!
  \*********************************/
/*! exports provided: default, movePlayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Entity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "movePlayer", function() { return movePlayer; });
/* harmony import */ var _world_generateRoom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../world/generateRoom */ "./src/js/world/generateRoom.js");
/* harmony import */ var _util_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/constants */ "./src/js/util/constants.js");
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.js */ "./src/js/app.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





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
  } // Return things


  _createClass(Entity, [{
    key: "adjTile",
    value: function adjTile(direction) {
      if (direction == _util_constants__WEBPACK_IMPORTED_MODULE_1__["NORTH"]) return _world_generateRoom__WEBPACK_IMPORTED_MODULE_0__["currentRoom"][this.posX - 1][this.posY];
      if (direction == _util_constants__WEBPACK_IMPORTED_MODULE_1__["SOUTH"]) return _world_generateRoom__WEBPACK_IMPORTED_MODULE_0__["currentRoom"][this.posX + 1][this.posY];
      if (direction == _util_constants__WEBPACK_IMPORTED_MODULE_1__["WEST"]) return _world_generateRoom__WEBPACK_IMPORTED_MODULE_0__["currentRoom"][this.posX][this.posY - 1];
      if (direction == _util_constants__WEBPACK_IMPORTED_MODULE_1__["EAST"]) return _world_generateRoom__WEBPACK_IMPORTED_MODULE_0__["currentRoom"][this.posX][this.posY + 1];
    } // Do things

  }, {
    key: "insertHere",
    value: function insertHere(x, y) {
      _world_generateRoom__WEBPACK_IMPORTED_MODULE_0__["currentRoom"][x][y] = this;
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
      Object(_world_generateRoom__WEBPACK_IMPORTED_MODULE_0__["resetTile"])(this.posX, this.posY);
      if (direction == _util_constants__WEBPACK_IMPORTED_MODULE_1__["NORTH"] && Object(_world_generateRoom__WEBPACK_IMPORTED_MODULE_0__["isTileWalkable"])(this.adjTile(_util_constants__WEBPACK_IMPORTED_MODULE_1__["NORTH"]))) this.posX--;
      if (direction == _util_constants__WEBPACK_IMPORTED_MODULE_1__["SOUTH"] && Object(_world_generateRoom__WEBPACK_IMPORTED_MODULE_0__["isTileWalkable"])(this.adjTile(_util_constants__WEBPACK_IMPORTED_MODULE_1__["SOUTH"]))) this.posX++;
      if (direction == _util_constants__WEBPACK_IMPORTED_MODULE_1__["WEST"] && Object(_world_generateRoom__WEBPACK_IMPORTED_MODULE_0__["isTileWalkable"])(this.adjTile(_util_constants__WEBPACK_IMPORTED_MODULE_1__["WEST"]))) this.posY--;
      if (direction == _util_constants__WEBPACK_IMPORTED_MODULE_1__["EAST"] && Object(_world_generateRoom__WEBPACK_IMPORTED_MODULE_0__["isTileWalkable"])(this.adjTile(_util_constants__WEBPACK_IMPORTED_MODULE_1__["EAST"]))) this.posY++;
      this.reInsert();
      Object(_app_js__WEBPACK_IMPORTED_MODULE_2__["draw"])();
    }
  }, {
    key: "attack",
    value: function attack(direction) {}
  }, {
    key: "destroy",
    value: function destroy() {}
  }]);

  return Entity;
}();


function movePlayer(direction) {
  Object(_world_generateRoom__WEBPACK_IMPORTED_MODULE_0__["resetTile"])(playerPos[0], playerPos[1]);
  if (direction == _util_constants__WEBPACK_IMPORTED_MODULE_1__["NORTH"] && _world_generateRoom__WEBPACK_IMPORTED_MODULE_0__["currentRoom"][playerPos[0] - 1][playerPos[1]] != _util_constants__WEBPACK_IMPORTED_MODULE_1__["wallTile"]) playerPos[0]--;
  if (direction == _util_constants__WEBPACK_IMPORTED_MODULE_1__["SOUTH"] && _world_generateRoom__WEBPACK_IMPORTED_MODULE_0__["currentRoom"][playerPos[0] + 1][playerPos[1]] != _util_constants__WEBPACK_IMPORTED_MODULE_1__["wallTile"]) playerPos[0]++;
  if (direction == _util_constants__WEBPACK_IMPORTED_MODULE_1__["WEST"] && _world_generateRoom__WEBPACK_IMPORTED_MODULE_0__["currentRoom"][playerPos[0]][playerPos[1] - 1] != _util_constants__WEBPACK_IMPORTED_MODULE_1__["wallTile"]) playerPos[1]--;
  if (direction == _util_constants__WEBPACK_IMPORTED_MODULE_1__["EAST"] && _world_generateRoom__WEBPACK_IMPORTED_MODULE_0__["currentRoom"][playerPos[0]][playerPos[1] + 1] != _util_constants__WEBPACK_IMPORTED_MODULE_1__["wallTile"]) playerPos[1]++;
  insertPlayer();
  Object(_app_js__WEBPACK_IMPORTED_MODULE_2__["draw"])();
}

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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

  return Player;
}(_Entity__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/js/util/constants.js":
/*!**********************************!*\
  !*** ./src/js/util/constants.js ***!
  \**********************************/
/*! exports provided: player, wallTile, pathTile, NORTH, EAST, SOUTH, WEST */
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
var player = '🌚';
var wallTile = '🌳';
var pathTile = '󠀠󠀠󠀠󠀠🌱';
var NORTH = 'n';
var EAST = 'e';
var SOUTH = 's';
var WEST = 'w';

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
/*! exports provided: createLevelShell */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLevelShell", function() { return createLevelShell; });
/* harmony import */ var _generateRoom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generateRoom */ "./src/js/world/generateRoom.js");
/* harmony import */ var _util_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/helper */ "./src/js/util/helper.js");

 // room.currentRoom;

var LEVEL_SIZE = 24;
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
  var y = Object(_util_helper__WEBPACK_IMPORTED_MODULE_1__["randomInt"])(0, LEVEL_SIZE);
  console.log('new room location:', x, y);
  var room = _generateRoom__WEBPACK_IMPORTED_MODULE_0__["createRoom"](); // check if x is valid
  // if (x + room[0].length > LEVEL_SIZE) {
  // 	console.log('wtf have you done');
  // 	room = r.createRoom()
  // }

  if (roomFits(level, room, x, y)) {
    spliceRoomIntoLevel(level, room, x, y);
  } // check if y is valid

}

function roomFits(level, room, x, y) {
  // X axis fits?
  if (x + room[0].length > LEVEL_SIZE) {
    console.log('wtf have you done');
    console.log(x, room[0].length);
    return false;
  } // Y axis fits?


  if (y + room.length > LEVEL_SIZE) {
    console.log('wtf have you done');
    console.log(y, room.length);
    return false;
  }

  return true;
}

function spliceRoomIntoLevel(level, room, x, y) {
  var _loop = function _loop(i) {
    console.log(room[i]);
    room.forEach(function (row, index) {
      var jndex = 0;

      for (var j = x; j < x + room[0].length; j++) {
        level[i][j] = room[index][jndex];
        console.log(i, j, index, jndex);
        jndex++; // room[index].forEach((cell, jndex) => {
        // 	level[i][j] = cell
        // 	// console.log(level[i][j])
        // })
      }
    });
  };

  for (var i = y; i < y + room.length; i++) {
    _loop(i);
  }

  console.log('ere', level);
} ////////


var level = createLevelShell();
placeFirstRoom(level);

/***/ }),

/***/ "./src/js/world/generateRoom.js":
/*!**************************************!*\
  !*** ./src/js/world/generateRoom.js ***!
  \**************************************/
/*! exports provided: currentRoom, createRoom, insertPlayerToSpace, resetTile, whatIsTile, isTileWalkable, movePlayer, moveEntity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentRoom", function() { return currentRoom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRoom", function() { return createRoom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertPlayerToSpace", function() { return insertPlayerToSpace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetTile", function() { return resetTile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whatIsTile", function() { return whatIsTile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTileWalkable", function() { return isTileWalkable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "movePlayer", function() { return movePlayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveEntity", function() { return moveEntity; });
/* harmony import */ var _util_helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/helper.js */ "./src/js/util/helper.js");
/* harmony import */ var _util_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/constants.js */ "./src/js/util/constants.js");
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.js */ "./src/js/app.js");



var DEFAULT_MAX_ROOM_SIZE = 8;
var DEFAULT_MIN_ROOM_SIZE = 5;
var DEFAULT_EXIT_SIZE = 2;
var WALL_TILES = ['🌳'];
var PATH_TILES = ['󠀠󠀠󠀠󠀠🌱'];
var playerPos = [1, 1];
var currentRoom = insertExit(insertExit(insertExit(insertExit(generateRandomRoom(), _util_constants_js__WEBPACK_IMPORTED_MODULE_1__["SOUTH"]), _util_constants_js__WEBPACK_IMPORTED_MODULE_1__["WEST"]), _util_constants_js__WEBPACK_IMPORTED_MODULE_1__["EAST"]), _util_constants_js__WEBPACK_IMPORTED_MODULE_1__["NORTH"]);
var createRoom = function createRoom() {
  return insertExit(insertExit(insertExit(insertExit(generateRandomRoom(), _util_constants_js__WEBPACK_IMPORTED_MODULE_1__["SOUTH"]), _util_constants_js__WEBPACK_IMPORTED_MODULE_1__["WEST"]), _util_constants_js__WEBPACK_IMPORTED_MODULE_1__["EAST"]), _util_constants_js__WEBPACK_IMPORTED_MODULE_1__["NORTH"]);
};
/**
 * ROOM GENERATION
 */

function randomRoomSize() {
  return Object(_util_helper_js__WEBPACK_IMPORTED_MODULE_0__["randomInt"])(DEFAULT_MIN_ROOM_SIZE, DEFAULT_MAX_ROOM_SIZE);
}

function roomShell(w, h) {
  var shell = [];
  var row = [];

  for (var j = 0; j < h; j++) {
    if (j == 0 || j == h - 1) {
      // Create a row of only walls
      shell.push(Array(w).fill(_util_constants_js__WEBPACK_IMPORTED_MODULE_1__["wallTile"]));
    } else {
      // Create a row with walls on either side
      for (var i = 0; i < w; i++) {
        if (i == 0 || i == w - 1) {
          row.push(_util_constants_js__WEBPACK_IMPORTED_MODULE_1__["wallTile"]);
        } else row.push(_util_constants_js__WEBPACK_IMPORTED_MODULE_1__["pathTile"]);
      }

      shell.push(row);
      row = [];
    }
  }

  return shell;
}

function insertExitXAxis(room, rowIndex) {
  var borderRange = room[rowIndex].length - 1;
  var where = Object(_util_helper_js__WEBPACK_IMPORTED_MODULE_0__["randomInt"])(1, borderRange - DEFAULT_EXIT_SIZE);
  room[rowIndex].splice(where, DEFAULT_EXIT_SIZE, _util_constants_js__WEBPACK_IMPORTED_MODULE_1__["pathTile"], _util_constants_js__WEBPACK_IMPORTED_MODULE_1__["pathTile"]);
  return room;
}

function insertExitYAxis(room, colIndex) {
  var borderRange = room.length - 1;
  var where = Object(_util_helper_js__WEBPACK_IMPORTED_MODULE_0__["randomInt"])(1, borderRange - DEFAULT_EXIT_SIZE);

  function createRowWithExit(exitIndex) {
    var row = [];
    var w = room[0].length;

    for (var i = 0; i < w; i++) {
      if (i == exitIndex) {
        row.push(_util_constants_js__WEBPACK_IMPORTED_MODULE_1__["pathTile"]);
      } else if (i != exitIndex && i == 0 || i == w - 1) {
        row.push(_util_constants_js__WEBPACK_IMPORTED_MODULE_1__["wallTile"]);
      } else row.push(_util_constants_js__WEBPACK_IMPORTED_MODULE_1__["pathTile"]);
    }

    return row;
  }

  room.splice(where, DEFAULT_EXIT_SIZE, createRowWithExit(colIndex), createRowWithExit(colIndex));
  return room;
}

function insertExit(room, direction) {
  if (direction == _util_constants_js__WEBPACK_IMPORTED_MODULE_1__["NORTH"]) {
    return insertExitXAxis(room, 0);
  } else if (direction == _util_constants_js__WEBPACK_IMPORTED_MODULE_1__["SOUTH"]) {
    return insertExitXAxis(room, room.length - 1);
  } else if (direction == _util_constants_js__WEBPACK_IMPORTED_MODULE_1__["EAST"]) {
    return insertExitYAxis(room, room[0].length - 1);
  } else if (direction == _util_constants_js__WEBPACK_IMPORTED_MODULE_1__["WEST"]) {
    return insertExitYAxis(room, 0);
  }
}

function generateRandomRoom() {
  var shell = roomShell(randomRoomSize(), randomRoomSize());
  return shell;
}

function buildRoom() {}
/*
	Parameters:
	an array of directions where there can be exits
	an array of monsters
	an 
*/

/**
 * INSERTING / MOVING PLAYER
 */


function insertPlayerFirstAvailableSpace() {
  var pos = [];
  currentRoom.find(function (row, index1) {
    if (row.find(function (space, index2) {
      if (space === _util_constants_js__WEBPACK_IMPORTED_MODULE_1__["pathTile"] && pos.length < 2) {
        pos.push(index1);
        pos.push(index2);
        return;
      }
    })) return;
  });
  currentRoom[pos[0]][pos[1]] = _util_constants_js__WEBPACK_IMPORTED_MODULE_1__["player"];
}

function insertPlayerToSpace(x, y) {
  currentRoom[x][y] = _util_constants_js__WEBPACK_IMPORTED_MODULE_1__["player"];
}

function insertPlayer() {
  insertPlayerToSpace(playerPos[0], playerPos[1]);
}

function resetTile(x, y) {
  currentRoom[x][y] = _util_constants_js__WEBPACK_IMPORTED_MODULE_1__["pathTile"];
}
function whatIsTile(x, y) {
  return currentRoom[x][y];
}
function isTileWalkable(tile) {
  return PATH_TILES.includes(tile) ? true : false;
}

function getPlayerPos() {
  currentRoom.find(function (row) {
    return row.find(function (space) {
      return space == _util_constants_js__WEBPACK_IMPORTED_MODULE_1__["player"];
    });
  });
}

function movePlayer(direction) {
  resetTile(playerPos[0], playerPos[1]);
  if (direction == _util_constants_js__WEBPACK_IMPORTED_MODULE_1__["NORTH"] && currentRoom[playerPos[0] - 1][playerPos[1]] != _util_constants_js__WEBPACK_IMPORTED_MODULE_1__["wallTile"]) playerPos[0]--;
  if (direction == _util_constants_js__WEBPACK_IMPORTED_MODULE_1__["SOUTH"] && currentRoom[playerPos[0] + 1][playerPos[1]] != _util_constants_js__WEBPACK_IMPORTED_MODULE_1__["wallTile"]) playerPos[0]++;
  if (direction == _util_constants_js__WEBPACK_IMPORTED_MODULE_1__["WEST"] && currentRoom[playerPos[0]][playerPos[1] - 1] != _util_constants_js__WEBPACK_IMPORTED_MODULE_1__["wallTile"]) playerPos[1]--;
  if (direction == _util_constants_js__WEBPACK_IMPORTED_MODULE_1__["EAST"] && currentRoom[playerPos[0]][playerPos[1] + 1] != _util_constants_js__WEBPACK_IMPORTED_MODULE_1__["wallTile"]) playerPos[1]++;
  insertPlayer();
  Object(_app_js__WEBPACK_IMPORTED_MODULE_2__["draw"])();
}
function moveEntity(entityId, currentPosX, currentPosY, direction) {} // findEntity()

/**
 * Some future thoughts:
 * Create a textbox that narrates what is happening
 */

/***/ }),

/***/ 0:
/*!*****************************!*\
  !*** multi ./src/js/app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Charlie/Code/roguelike/src/js/app.js */"./src/js/app.js");


/***/ })

/******/ });