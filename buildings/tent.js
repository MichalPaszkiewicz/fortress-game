var Tent = function(x, y, colour){
	this.x = x;
	this.y = y;
	this.colour = colour;
	
	this.sections = function()
	{

		return [
			//tent
			[{type:"set",x:x,y:y},{x: 30, y: -50},{x: 30, y:50},{type:"~",x: -10, y: -20, b1x: -10, b1y: 20, b2x: -40, b2y: 0},{type:"#", colour:"white"}, {type:"-"}],
			//mast
			[{type:"set",x:30,y:-50},{x:0,y:-40},{x:20,y:0},{x:0,y:10},{x:-20,y:0},{x:0,y:30},{colour: this.colour, type:"#"},{type:"-"},{type:"set",x:-30,y: 50}]
		];
	}
	
	return this;
}