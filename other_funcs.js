var MAP_WIDTH = 600;
var MAP_HIEHGT = 600;
var METRO_WIDTH = 50;
var METRO_HEIGHT = 20;

function distance(x_1, y_1, x_2, y_2) {
    return Math.sqrt((x_1 - x_2) * (x_1 - x_2) + (y_1 - y_2) * (y_1 - y_2));
}

function rotate(x_1, y_1, x_2, y_2) {
    return Math.atan((y_2 - y_1) / (x_2 - x_1)) * 180 / Math.PI;
}

function slopeX(x_1, y_1, x_2, y_2) {
    return (x_2 - x_1) / Math.sqrt((x_2 - x_1) * (x_2 - x_1) +
        (y_2 - y_1) * (y_2 - y_1));
}

function slopeY(x_1, y_1, x_2, y_2) {
    return (y_2 - y_1) / Math.sqrt((x_2 - x_1) * (x_2 - x_1) +
        (y_2 - y_1) * (y_2 - y_1));
}

function findInArray(elem, array) {
    return array.findIndex(function (element) {
        return element == elem;
    });
}