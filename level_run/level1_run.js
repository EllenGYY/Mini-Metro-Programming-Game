let stations = [];
let lines = [];
let carts = [];
let peopleArrived = 0;

function level_run(){
	if(stations != []){
		level_clear();
	}
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
        element.spawnPassengersInterval();
    });
    document.getElementById("score").innerHTML = "Running...Score is " + peopleArrived;
}

function level_clear(){
	if(stations == []){
		return;
	}
	document.getElementById("canvas").getContext("2d").clearRect(0, 0, document.getElementById("canvas").width, 
		document.getElementById("canvas").height);
	stations.forEach(element => {
		element.clearPassengersInterval();
		element.deleteDivs();
    });
    carts.forEach(element => {
    	element.deleteCart();
    })
    stations = [];
    lines = [];
    carts = [];
}

function level_gameEnd(){
	stations.forEach(element => {
		element.clearPassengersInterval();
	});
	carts.forEach(element => {
		element.aniStop = true;
	})
	document.getElementById("score").innerHTML = "Game End! Score is " + peopleArrived;

}

function newLine(stations, color){
	let temp = new Line(stations, color);
	stations.forEach(element => {
        element.drawStation();
    });
    lines[lines.length] = temp;
    return temp;
}

function newCart(l){
	let temp = new Cart(l);
	temp.operating();
	carts[carts.length] = temp;
	return temp;
}