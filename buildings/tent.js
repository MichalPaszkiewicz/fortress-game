var Tent = function(x, y, colour){
	this.x = x;
	this.y = y;
	
	this.sections = function()
	{

		return [
			//tent
			[{type:"set",x:x,y:y},]
		];
	}
	
	return this;
}