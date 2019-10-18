var MAP_WIDTH = 600;
var MAP_HIEHGT = 600;
var METRO_WIDTH = 50;
var METRO_HEIGHT = 30;

function drawTriangle(ctx, x, y, scale, fillstyle) {
    ctx.beginPath();
    ctx.moveTo(x, y - 2 * scale);
    ctx.lineTo(x - 1.73 * scale, y + scale);
    ctx.lineTo(x + 1.73 * scale, y + scale);
    ctx.lineTo(x, y - 2 * scale);
    ctx.stroke();
    ctx.fillStyle = fillstyle;
    ctx.fill();
}

function drawSquare(ctx, x, y, scale, fillstyle) {
    ctx.beginPath();
    ctx.rect(x - 1.5 * scale, y - 1.5 * scale, 3 * scale, 3 * scale);
    ctx.stroke();
    ctx.fillStyle = fillstyle;
    ctx.fill();
}

function drawCircle(ctx, x, y, scale, fillstyle) {
    ctx.beginPath();
    ctx.arc(x, y, 1.5 * scale, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = fillstyle;
    ctx.fill();
}

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