var Castle = function(x, y, colour){
	this.colour = colour;
	this.sections = function(){
		return [
			//top
			[{type:"set",x:0,y:0},{type:"battlements", x:60,y:-30},{type:"battlements",x:60,y:30},{x:0,y:60},{x:-120,y:0},{x:0,y:-60},{type:"#",colour:"white"},{type:"-"}],
			//leftWall
			[{type:"set",x:0,y:0},{type:"battlements", x:60,y:30},{x:0,y:60},{x:-60,y:-30},{x:0,y:-60},{type:"#",colour:"white"},{type:"-"}],
			//mast
			[{type:"set",x:0,y:0},{x:0,y:-40},{x:20,y:0},{x:0,y:10},{x:-20,y:0},{x:0,y:30},{colour: this.colour, type:"#"},{type:"-"}],
			//rightWall
			[{type:"set",x:60,y:30},{type:"battlements",x:60,y:-30},{x:0,y:60},{x:-60,y:30},{x:0,y:-60},{type:"#",colour:"white"},{type:"-"}],
		]
	};
	this.x = x;
	this.y = y;
	
	return this;
};