var id;

function startAni() {

    document.getElementById("start").disabled = true;

    var newmetro;
    var newmetros = [];
    var direction = [];
    var posx;
    var posy;
    var slopex;
    var slopey;

    for (var i = 0; i < lines.length; i++) {
        newmetro = document.createElement("div");
        newmetro.setAttribute("class", "metro");
        newmetro.style.left = (lines[i][0][0] - 25) + "px";
        newmetro.style.top = (lines[i][0][1] - 10) + "px";
        newmetro.style.transform = "rotate(" + Math.atan((lines[i][1][1] - lines[i][0][1]) / (lines[i][1][0] - lines[i][0][0])) * 180 / Math.PI + "deg)";
        document.getElementById("myMap").appendChild(newmetro);
        newmetros[i] = newmetro;
        direction[i] = false;
    }

    id = setInterval(frame, 10);
    function frame() {
        for (var i = 0; i < lines.length; i++) {
            slopex = (lines[i][1][0] - lines[i][0][0]) / Math.sqrt((lines[i][1][0] - lines[i][0][0]) * (lines[i][1][0] - lines[i][0][0]) +
                (lines[i][1][1] - lines[i][0][1]) * (lines[i][1][1] - lines[i][0][1]));
            slopey = (lines[i][1][1] - lines[i][0][1]) / Math.sqrt((lines[i][1][0] - lines[i][0][0]) * (lines[i][1][0] - lines[i][0][0]) +
                (lines[i][1][1] - lines[i][0][1]) * (lines[i][1][1] - lines[i][0][1]));
            posx = parseFloat(newmetros[i].style.left.substring(0, newmetros[i].style.left.length - 2), 10);
            posy = parseFloat(newmetros[i].style.top.substring(0, newmetros[i].style.top.length - 2), 10);
            if (((lines[i][1][0] - lines[i][0][0] > 0) && (posx < lines[i][0][0] - 25 || posx > lines[i][1][0] - 25)) ||
                ((lines[i][1][0] - lines[i][0][0] < 0) && (posx > lines[i][0][0] - 25 || posx < lines[i][1][0] - 25))) {
                direction[i] = !direction[i];
            }
            if (direction[i]) {
                posx += slopex;
                posy += slopey;
            }
            else {
                posx -= slopex;
                posy -= slopey;
            }
            newmetros[i].style.left = posx + 'px';
            newmetros[i].style.top = posy + 'px';
        }
    }
}

function stopAni() {
    clearInterval(id);
    document.getElementById("start").disabled = false;
    var x = document.getElementsByClassName("metro");
    while (x.length > 0) {
        document.getElementById("myMap").removeChild(x[0]);
    }
}