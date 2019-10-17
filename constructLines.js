var new_cart;

function constructLines() {
    var new_line = new Line(stations, "#FF0000", 0);
    new_line.drawLine();
    new_cart = new Cart(new_line, stations[3], 1);
    new_cart.initialize();
    setInterval(frame, 10);
}

function frame() {
    new_cart.update();
}
