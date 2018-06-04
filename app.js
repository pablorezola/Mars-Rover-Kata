var rover = {
	   name: "Rover",
       direction: "S",
        x: 0,
        y: 0,
        obstacle: [[2,7], [5,5], [6,0], [0,4], [1,2], [4,9]],
        toStop: false,
        number: 1,
       travelLog: ["(0,0)"],
     };
        
var rover2 = {
	   name: "Rover2",
       direction: "N",
         x: 7,
         y: 7,
         obstacle: [[2,7], [5,5], [6,0], [0,4], [1,2], [4,9]],
         toStop: false,
         number: 2,
       travelLog:["(7,7)"], 
};

var grid = [
  ["Rover",null,null,null,"Rock4",null,null,null,null,null],   
  [null,null,"Rock5",null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,"Rock1",null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,"Rock6"],
  [null,null,null,null,null,"Rock2",null,null,null,null],
  ["Rock3",null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,"Rover2",null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],    
];


var obstacles = [

    { "name": "Rock1",
      "position": [2,7]
    },

    { "name": "Rock2",
      "position": [5,5]
    },

    { "name": "Rock3",
      "position": [6,0]
    },

    { "name": "Rock4",
      "position": [0,4]
    },

    { "name": "Rock5",
      "position": [1,2]
    },

    { "name": "Rock6",
      "position": [4,9]
    }

  ];


function turnLeft(rover, rover2) {
	switch (rover.direction) {
       case "N":
        rover.direction = "W"
        break;
       case "S":
        rover.direction = "E"
        break;
       case "E":
        rover.direction = "N"
        break;
       case "W":
        rover.direction = "S"   
        break;
     }

  console.log("Rover turns to: " + rover.direction);
  	
  }

function turnRight(rover, rover2) { 
     switch (rover.direction) { 
      case "N":
      rover.direction = "E"
      break;
      case "S":
      rover.direction = "W"
      break;
      case "E":
      rover.direction = "S"
      break;
      case "W":
      rover.direction = "N"
      break;
    }

  console.log("Rover turns to: " + rover.direction);
  console.log("Rover2 turns to: " + rover2.direction);
}


function moveForward(rover, rover2){
	switch(rover.direction) {
      case "N":
      rover.y = rover.y-1
      break;
    case "S":
      rover.y = rover.y+1
      break;
    case "E":
      rover.x = rover.x+1
      break;
    case "W":
      rover.x = rover.x-1
      break;
  }

   Map(rover, rover2, "forward");
}


function moveBackwards(rover, rover2) {
	switch (rover.direction) {
        case "N":
          rover.y = rover.y+1
            break;
        case "S":
          rover.y = rover.y-1
            break;
        case "E":
          rover.x = rover.x-1
            break;
        case "W":
          rover.x = rover.x+1
            break;
    }
      Map(rover, rover2, "backwards");
  }


function Commands (rover, rover2) {
	var command = prompt( "Hi operator! Give me the sequence of commands to move the rover. Use f (forward), b (backward), l (lleft) or r (right).");
    command = command.split("");
	for (var i = 0; i < command.length; i++) {
		if (command[i] == "f") {
	      moveForward (rover, rover2, command[i])
		} else if (command[i] == "b") {
          moveBackwards (rover, rover2, command[i])
		} else if (command[i] == "r") {
			turnRight(rover, rover2, command[i])
		} else if (command[i] == "l") {
		     turnLeft(rover, rover2, command[i])
		} else {
			alert ("Invalid command");
			return Commands (rover, rover2, command)
		}
	}

}



function Map (rover, rover2){ 
if((rover.x < 0,0 && rover.x > 0,9) || (rover.y < 0,0 && rover.y > 9,9)){
	console.log("Rover is out of the map.");
}
if((rover2.x < 0,0 && rover2.x > 0,9) || (rover2.y < 0 && rover2.y > 9,9)){
	console.log("Rover2 is out of the map.");
} else {
	 checkObstacles (rover, rover2);
	 CoordinatesLog (rover, rover2);
	}
	printCoordinates(rover, rover2);
}

function CoordinatesLog (rover, rover2) {
	var coordinates = getCoordinates(rover, rover2);
	rover.travelLog.push(coordinates);
	rover2.travelLog.push(coordinates);
}

function printCoordinates (rover, rover2) {
	var coordinates = getCoordinates(rover, rover2);
  console.log("Rover Coordinates "+coordinates );
  console.log("Rover2 Coordinates "+coordinates );
}

function getCoordinates(rover, rover2){
  var coordinates = "("+rover.x+","+rover.y+")";
  var coordinatea = "("+rover2.x+","+rover2.y+")";
  return coordinates;
}

function checkObstacles(rover, rover2){
  var roverCoordinates = getCoordinates(rover, rover2);
  if(obstacles.includes(roverCoordinates)){
    console.log("Obstacle in: "+roverCoordinates);
    console.log("Obstacle in: "+rover2Coordinates);
  }
}

Commands (rover, rover2)
