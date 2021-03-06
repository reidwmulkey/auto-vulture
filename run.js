var robot = require("robotjs");

//X & Y position of your mouse to click the "Join Queue" button. 
//Aim for the top of the button so you avoid pressing the cancel button
var joinQueue = {
	x: <insert your x value>,
	y: <insert your y value>
};

//X & Y position of your mouse to click the "Leave Match" button at the end of the match
var leaveMatch = {
	x: <insert your x value>,
	y: <insert your y value>
};

setInterval(function(){
	var mouse=robot.getMousePos();
	console.log("Mouse is at x:" + mouse.x + " y:" + mouse.y);
	robot.moveMouse(joinQueue.x, joinQueue.y);
	robot.mouseClick();
	robot.mouseClick();
	robot.moveMouse(leaveMatch.x, leaveMatch.y);
	robot.mouseClick();
	robot.mouseClick(); //second mouse click to un-pause the game from clicking your talents
},10000);