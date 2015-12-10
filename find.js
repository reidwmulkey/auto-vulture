var robot = require("robotjs");
setInterval(function(){
	var mouse=robot.getMousePos();
	console.log("Mouse is at x:" + mouse.x + " y:" + mouse.y);
},1000);