var new_line;
var new_cart;
var lines = [];
var carts = [];

function constructLines() {
    new_line = new Line([stations[0], stations[1], stations[2]], "#FF0000", 0);
    new_line.drawLine();
    lines[0] = new_line;
    new_line = new Line([stations[3], stations[4], stations[5]], "#1D4735", 1);
    new_line.drawLine();
    lines[1] = new_line;
    stations.forEach(element => {
        element.drawStation();
        element.spawnPassengers();
        element.showPassengers();
        setInterval(function () { element.spawnPassengers(); element.showPassengers(); }, 3000);
    });
    new_cart = new Cart(lines[0], stations[1], 1);
    new_cart.initialize();
    carts[0] = new_cart;
    new_cart = new Cart(lines[1], stations[4], -1);
    new_cart.initialize();
    carts[1] = new_cart;
    setInterval(frame, 10);
}

function frame() {
    carts.forEach(element => {
        element.update();
    });
}
