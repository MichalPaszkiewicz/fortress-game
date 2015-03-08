var Tree = function(x, y){
	this.x = x;
	this.y = y;
	
	this.drawing = function()
	{
		return [{type:"set",x:x,y:y}, {x: 0, y: - 40}, {type:"-"}, {type:"set"}, {type:"circle",r:20}, {type:"-"}, {type:"#",colour:"white"}, {x: 0, y: 40}];
	}
	
	return this;
}

var Forest = function(x, y){
	this.trees = [];
	
	var treeX = ~~(Math.random() * 100);
	var treeY = ~~(Math.random() * 100);
	
	for(var i = 0; i < 30; i++){
		treeX = ~~(Math.random() * 100) - 50;
		treeY = ~~(Math.random() * 100) - 50;
		this.trees.push( new Tree(treeX, treeY) );
	} 
		
	this.trees.sort(function(a,b){return a.y - b.y});
	
	this.sections = function(){
		var currentTrees = this.trees.sort(function(a,b){return a.y - b.y});
		
		var sectionArray = [];
		
		for(var i in currentTrees){
			sectionArray.push(currentTrees[i].drawing());
		}
		
		return sectionArray;
	}
	
	this.x = x;
	this.y = y;

	return this;
}