var canvas;
var ctx;

function draw() {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    stations.forEach(element => {
        ctx.beginPath();
        ctx.arc(element[0], element[1], 10, 0, 2 * Math.PI);
        ctx.stroke();
    }
    )
    lines.forEach(element => {
        ctx.moveTo(element[0][0], element[0][1]);
        ctx.lineTo(element[1][0], element[1][1]);
        ctx.stroke();
    }
    )
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}