let stations;

function run(){
	let station_1 = new Station(new Position(100, 100), Eshape.TRIANGLE);
	let station_2 = new Station(new Position(200, 300), Eshape.CIRCLE);
	let station_3 = new Station(new Position(400,150), Eshape.CIRCLE);
	let station_4 = new Station(new Position(30, 400), Eshape.TRIANGLE);
	let station_5 = new Station(new Position(370, 310), Eshape.SQUARE);
	let station_6 = new Station(new Position(500,50), Eshape.SQUARE);
	stations = [station_1, station_2, station_3, station_4, station_5, station_6];
	stations.forEach(element => {
		element.drawStation();
        element.spawnPassengers();
        setInterval(function () {element.spawnPassengers();}, 3000);
    });
}

function newLine(stations, color){
	let temp = new Line(stations, color);
	stations.forEach(element => {
        element.drawStation();
    });
    return temp;
}

function newCartonLine(l){
	let temp = new Cart(l);
	temp.operating();
	return temp;
}