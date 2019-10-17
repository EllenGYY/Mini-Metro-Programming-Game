var MAP_WIDTH = 600;
var MAP_HIEHGT = 600;
var METRO_WIDTH = 50;
var METRO_HEIGHT = 20;

var STATION_NUMBER = 20;
var CLOSEST_DISTANCE_OF_TWO_STOPS = 60;
var CLOSEST_DISTANCE_OF_TWO_HUBS = 300;
var AFFECT_DISTANCE_TO_HUBS = 100;
var CONCENTRATION = 0.3;

var stations = [];

function spawnStation() {
    i = STATION_NUMBER;

    hub_1_x = Math.round(Math.random() * (MAP_WIDTH - METRO_WIDTH) + METRO_WIDTH / 2);
    hub_1_y = Math.round(Math.random() * (MAP_HIEHGT - METRO_HEIGHT) + METRO_HEIGHT / 2);
    far = false;
    while (!far) {
        far = true;
        hub_2_x = Math.round(Math.random() * (MAP_WIDTH - METRO_WIDTH) + METRO_WIDTH / 2);
        hub_2_y = Math.round(Math.random() * (MAP_HIEHGT - METRO_HEIGHT) + METRO_HEIGHT / 2);
        if (distance(hub_1_x, hub_1_y, hub_2_x, hub_2_y) < CLOSEST_DISTANCE_OF_TWO_HUBS) { far = false; }
    }

    for (var m = 0; m < i; m++) {
        far = false;
        while (!far) {
            far = true;
            x = Math.round(Math.random() * (MAP_WIDTH - METRO_WIDTH) + METRO_WIDTH / 2);
            y = Math.round(Math.random() * (MAP_HIEHGT - METRO_HEIGHT) + METRO_HEIGHT / 2);
            stations.forEach(element => {
                if (distance(element.PosX, element.PosY, x, y) < CLOSEST_DISTANCE_OF_TWO_STOPS) { far = false; }
            })
            if (distance(hub_1_x, hub_1_y, x, y) > AFFECT_DISTANCE_TO_HUBS
                && distance(hub_2_x, hub_2_y, x, y) > AFFECT_DISTANCE_TO_HUBS) {
                if (Math.random() > CONCENTRATION) { far = false; }
            }
        }
        var s = Math.random();
        var shape;
        if (s < 1 / 3) { shape = "circle"; }
        if (s >= 1 / 3 && s < 2 / 3) { shape = "square"; }
        if (s >= 2 / 3) { shape = "triangle"; }
        var new_station = new Station(x, y, shape);
        new_station.drawStation();
        stations[m] = new_station;
    }
}

function distance(x_1, y_1, x_2, y_2) {
    return Math.sqrt((x_1 - x_2) * (x_1 - x_2) + (y_1 - y_2) * (y_1 - y_2));
}