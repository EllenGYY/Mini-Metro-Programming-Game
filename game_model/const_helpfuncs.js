const Eshape = Object.freeze({"CIRCLE": 1, "SQUARE": 2, "TRIANGLE": 3});
const EPstatus = Object.freeze({"WAIT": 1, "ON": 2, "OFF": 3});

function drawTriangle(ctx, pos, scale, fillstyle) {
    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y - 2 * scale);
    ctx.lineTo(pos.x - 1.73 * scale, pos.y + scale);
    ctx.lineTo(pos.x + 1.73 * scale, pos.y + scale);
    ctx.lineTo(pos.x, pos.y - 2 * scale);
    ctx.stroke();
    ctx.fillStyle = fillstyle;
    ctx.fill();
}

function drawSquare(ctx, pos, scale, fillstyle) {
    ctx.beginPath();
    ctx.rect(pos.x - 1.5 * scale, pos.y - 1.5 * scale, 3 * scale, 3 * scale);
    ctx.stroke();
    ctx.fillStyle = fillstyle;
    ctx.fill();
}

function drawCircle(ctx, pos, scale, fillstyle) {
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, 1.5 * scale, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = fillstyle;
    ctx.fill();
}

function findInArray(elem, array) {
    return array.findIndex(function (element) {
        return element == elem;
    });
}

function animate({timing, draw, duration}) {
    let start = performance.now();
    requestAnimationFrame(
        function animate(time) {
            let timeFraction = (time - start) / duration;
            if (timeFraction > 1) {timeFraction = 1;}
            draw(timing(timeFraction));
            if (timeFraction < 1) {requestAnimationFrame(animate);}
        }
    );
}

