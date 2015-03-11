var Tower = function(x, y, colour){
	this.colour = colour;
	this.sections = function(){
		return [
			//top
			[{type:"set",x:0,y:0},{type:"battlements", x:40,y:-20},{type:"battlements",x:40,y:20},{x:0,y:100},{x:-80,y:0},{x:0,y:-100},{type:"#",colour:"white"},{type:"-"}],
			//leftWall
			[{type:"set",x:0,y:0},{type:"battlements", x:40,y:20},{x:0,y:100},{x:-40,y:-20},{x:0,y:-100},{type:"#",colour:"white"},{type:"-"}],
			//mast
			[{type:"set",x:0,y:0},{x:0,y:-40},{x:20,y:0},{x:0,y:10},{x:-20,y:0},{x:0,y:30},{colour: this.colour, type:"#"},{type:"-"}],
			//rightWall
			[{type:"set",x:40,y:20},{type:"battlements",x:40,y:-20},{x:0,y:100},{x:-40,y:20},{x:0,y:-100},{type:"#",colour:"white"},{type:"-"}],
		]
	};
	this.x = x;
	this.y = y;
	
	return this;
};