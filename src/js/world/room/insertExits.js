import * as c from '../../util/constants';
import { randomInt } from "../../util/helper";
import { WALL_TILE, PATH_TILE } from "../Tile";

// Finds an acceptable 2x1 space and inserts it horizontally
function insertExitXAxis(room, side) {
    var rowIndex;
    side == c.NORTH ? rowIndex = 0 : rowIndex = room.length - 1;

    var borderRangeX = room[rowIndex].length - 1;
    var whereX = randomInt(1, borderRangeX - c.DEFAULT_EXIT_SIZE);

    room[rowIndex].splice(whereX, c.DEFAULT_EXIT_SIZE, PATH_TILE(), PATH_TILE());
    return room;
}
// Finds an acceptable 2x1 space and inserts it vertically
function insertExitYAxis(room, side) {
    var colIndex;
    side == c.WEST ? colIndex = 0 : colIndex = room[0].length - 1;

    var borderRangeY = room.length - 1;
    var whereY = randomInt(1, borderRangeY - c.DEFAULT_EXIT_SIZE);
    const roomCopy = room.slice();

    function createRowWithExit(exitIndex) {
        var row = [];
        var roomWidth = room[0].length;
        for (let i = 0; i < roomWidth; i++) {

            var oppositeSideIndex;
            if (exitIndex == 0) {
                oppositeSideIndex = roomWidth - 1;
            } else oppositeSideIndex = 0;

            if (i == exitIndex) {
                row.push(PATH_TILE()); // pathtile
            } else if (i != exitIndex && i == 0 || i == oppositeSideIndex) {
                row.push(WALL_TILE());
            } else row.push(PATH_TILE()); // was pathtile
        }

        // FIXME: walls/paths are being overwritten by previous methods
        if (room[whereY][oppositeSideIndex] == PATH_TILE()) {
            row[oppositeSideIndex] = PATH_TILE();
        }


        // console.log(side, row);
        return row;
    }
    roomCopy.splice(whereY, c.DEFAULT_EXIT_SIZE, createRowWithExit(colIndex), createRowWithExit(colIndex));

    return roomCopy;
}

export function insertExit(room, direction) {
    if (direction == c.NORTH) {
        return insertExitXAxis(room, c.NORTH);
    } else if (direction == c.SOUTH) {
        return insertExitXAxis(room, c.SOUTH);
    } else if (direction == c.EAST) {
        return insertExitYAxis(room, c.EAST);
    } else if (direction == c.WEST) {
        return insertExitYAxis(room, c.WEST);
    }
}