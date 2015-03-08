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
		case "#":
			context.fillStyle = item.colour;
			context.fill();
			break;
		case "-":
			context.stroke();
			break;
		case "set":
			context.beginPath();
		case "move":
			context.moveTo(position.x += item.x * scale,position.y += item.y * scale);
			break;
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
		case "circle":
			context.arc(position.x += item.x * scale, position.y += item.y * scale, item.r, 0, 2 * Math.PI, false);
			break;
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