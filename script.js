var canvas = document.getElementById("my-canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext("2d");

var battlementSize = 10;

function drawItemFromArray(item, position, scale){
	if(scale == undefined || scale == null)scale = 1;
	if(item.x == undefined)item.x = 0;
	if(item.y == undefined)item.y = 0;
	switch(item.type){
		//fill an area with colour
		case "#":
			context.fillStyle = item.colour;
			context.fill();
			break;
		//draw line
		case "-":
			context.stroke();
			break;
		//begin path and move to
		case "set":
			context.beginPath();
		//move to
		case "move":
			context.moveTo(position.x += item.x * scale,position.y += item.y * scale);
			break;
		//draw battlements
		case "battlements":
			var length = item.x * scale;
			var btlmtSize = battlementSize;
			var numberOfBattlements = Math.abs(length/btlmtSize);			
			if(numberOfBattlements % 2 == 0){
				numberOfBattlements++;
			}
			btlmtSize = length / numberOfBattlements;
			for(var i = 0; i < numberOfBattlements; i++){
				context.lineTo(position.x += ((item.x * scale) / numberOfBattlements ), position.y += ((item.y * scale) / numberOfBattlements));
				if(i < numberOfBattlements - 1){
					if(i % 2 == 0){
						context.lineTo(position.x, position.y += btlmtSize);
					}
					else{
						context.lineTo(position.x, position.y -= btlmtSize);
					}
				}
			}
			break;
		//draw circle
		case "circle":
			context.arc(position.x += item.x * scale, position.y += item.y * scale, item.r, 0, 2 * Math.PI, false);
			break;
		//draw bezier curve
		case "~":
			if(item.b1x == undefined)item.b1x = 0;
			if(item.b1y == undefined)item.b1y = 0;
			if(item.b2x == undefined)item.b2x = 0;
			if(item.b2y == undefined)item.b2y = 0;
			context.bezierCurveTo(position.x += item.b1x * scale, position.y += item.b1y * scale, position.x += item.b2x * scale, position.y += item.b2y * scale, position.x += item.x * scale, position.y += item.y * scale);
			break;
		//cross-hatch square
		case "+":
			context.beginPath();
			context.fillRect(position.x += item.x * scale, position.y += item.y * scale, 1, 1);
			var lineSepX = item.ex * scale/ 10;
			var lineSepY = item.ey * scale/ 10;
			for(var  i = 0; i < lines; i++){
				context.moveTo(position.x + lineSepX * i, position.y);
				context.lineTo(position.x, position.y + lineSepY * i);
			}
			context.fillRect(position.x += item.ex * scale, position.y += item.ey * scale, 1, 1);
			context.stroke();
			break;
		//draw line
		case "line":
		case undefined:
		default:
			context.lineTo(position.x += item.x * scale,position.y += item.y * scale);
	}
	
	return {x: position.x, y: position.y};
}

function drawFromArray(itemArray, position, scale){
	if(scale == null || scale == undefined)scale = 1;
	for(var i in itemArray){
		position = drawItemFromArray(itemArray[i], position, scale);
	}
	return position;
}

function drawFromSections(sectionsArray, position, scale){
	if(scale == null || scale == undefined)scale = 1;
	for(var i in sectionsArray){
		position = drawFromArray(sectionsArray[i], position, scale);
	}
}

function drawItem(item, scale){
	if(scale == null || scale == undefined)scale = 1;
	drawFromSections(item.sections(), {x: item.x, y: item.y},scale);
}



context.stroke();