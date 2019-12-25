class Position{
	
	constructor(x, y){
		this._x = x;
		this._y = y;
	}

	get x(){ return this._x; }
	get y(){ return this._y; }

	distance(pos) {
    	return Math.sqrt((this._x - pos.x) * (this._x - pos.x) + (this._y - pos.y) * (this._y - pos.y));
	}

	rotation(pos) {
    	return Math.atan((pos.y - this._y) / (pos.x - this._x));
	}

}