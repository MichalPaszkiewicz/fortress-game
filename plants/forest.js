var Tree = function(x, y){
	this.x = x;
	this.y = y;
	
	this.sections = function()
	{
		return [
			//trunk
			[{type:"set",x:x,y:y}, {x: 0, y: - 40}, {x : 4, y: 0}, {x: 0, y : 40}, {type:"~", x : -1, y: -1, b1x : -1, b1y : 1, b2x : -2, b2y : 0}, {type:"#", colour:"white"}, {type:"-"}],
			//crown
			[{type:"set", x : 2, y : - 40}, {type:"circle",r:20}, {type:"-"}, {type:"#",colour:"white"}, {x: 0, y: 40}, {type:"set", x: -x - 2, y:-y}]
		];
	}
	
	return this;
}

var Forest = function(x, y){
	this.trees = [];
	
	var treeX = ~~(Math.random() * 100);
	var treeY = ~~(Math.random() * 100);
	
	//central forest
	for(var i = 0; i < 100; i++){
		treeX = ~~(Math.random() * 200) - 100;
		treeY = ~~(Math.random() * 200) - 100;
		this.trees.push( new Tree(treeX, treeY) );
	}
	
	//outskirts
	for(var  i = 0; i < 50; i++){
		treeX = ~~(Math.random() * 400) - 200;
		treeY = ~~(Math.random() * 400) - 200;
		this.trees.push( new Tree(treeX, treeY) );
	}
		
	this.trees.sort(function(a,b){return a.y - b.y});
	
	this.sections = function(){
		var currentTrees = this.trees.sort(function(a,b){return a.y - b.y});
		
		var sectionArray = [];
		
		for(var i in currentTrees){
			var subSections = currentTrees[i].sections();
			
			for(var j in subSections)
			{
				sectionArray.push(subSections[j]);
			}
		}
		
		return sectionArray;
	}
	
	this.x = x;
	this.y = y;

	return this;
}