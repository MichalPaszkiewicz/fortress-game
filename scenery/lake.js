var Lake = function(x, y, r){
	this.x = x;
	this.y = y;
	this.r = r;
	
	this.sections = function()
	{

		return [
			//lake
			[{type:"set",x:x,y:y},]
		];
	}
	
	return this;
}