class Passenger{

	constructor(shape){
		this._shape = shape;
		this._status = EPstatus.WAIT;
	}

	get shape(){ return this._shape; }
	get status(){ return this._status; }
	set status(s){ this._status = s; }

    drawPassenger(ctx, position, fillstyle) {
        ctx.lineWidth = 1;
        ctx.strokeStyle = fillstyle;
        if (this._shape == Eshape.CIRCLE) { drawCircle(ctx, position, 2, fillstyle); }
        if (this._shape == Eshape.SQUARE) { drawSquare(ctx, position, 2, fillstyle); }
        if (this._shape == Eshape.TRIANGLE) { drawTriangle(ctx, position, 2, fillstyle); }
    }


}