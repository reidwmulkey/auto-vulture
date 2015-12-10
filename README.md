# auto-vulture

auto-vulture is designed to eliminate the grind of getting your vulture mount in Heroes of the Storm. For whatever reason, the AI in training mode will win regardless of you participating, and you are not dropped for going AFK. You earn about 130k experience for each match, so this is just a simple mouse pointer bot to re-queue training matches all night.

Environment Setup
=================
You need to download NPM in order to run the application. You can download it here (http://nodejs.org/download/)

Download a zip of this repository and extract to your computer.

Program Setup
==============
Navigate to the extracted folder in command line or terminal and type the following:
```
	node find
```

This will log the X & Y position of your mouse every second. Position your mouse at the upper part of your "Join Queue" button and record the coordinates. Then press the "Join Queue" button, leave the match, and record the coordinates of the "Leave" button.

Open the file ```run.js``` with a text editor and input your mouse coordinates for the "Join Queue" button and the "Leave Match" inside the ```joinQueue``` and ```leaveMatch``` variables respectively. It should look something like this:

```
	var joinQueue = {
		x: <insert your X value>,
		y: <insert your Y value>
	};

	var leaveMatch = {
		x: <insert your X value>,
		y: <insert your Y value>
	};
```

you can enter ```ctrl + c``` twice to stop the program, and then save your changes.

Running the program
===================
type the command:
```
	node run
```

and enjoy your new mount :) (at least until Blizzard patches this)