var rover = {
	   name: "Rover",
       direction: " N",
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

var obstacles = [
  ["Rover",null,null,null,"Rock",null,null,null,null,null],   
  [null,null,"Rock",null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,"Rock",null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,"Rock"],
  [null,null,null,null,null,"Rock",null,null,null,null],
  ["Rock",null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,"Rover2",null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],    
];


var Rock = [

    { "name": "Rock",
      "position": [2,7]
    },

    { "name": "Rock",
      "position": [5,5]
    },

    { "name": "Rock",
      "position": [6,0]
    },

    { "name": "Rock",
      "position": [0,4]
    },

    { "name": "Rock",
      "position": [1,2]
    },

    { "name": "Rock",
      "position": [4,9]
    }

  ];


function turnLeft(rover) {
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

     switch (rover2.direction) {
       case "N":
        rover2.direction = "W"
        break;
       case "S":
        rover2.direction = "E"
        break;
       case "E":
        rover2.direction = "N"
        break;
       case "W":
        rover2.direction = "S"   
        break;
     }

  console.log("Rover turns to: " + rover.direction);
  console.log("Rover2 turns to: " + rover2.direction);
  }

function turnRight(rover) { 
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
    switch (rover2.direction) {
       case "N":
        rover2.direction = "W"
        break;
       case "S":
        rover2.direction = "E"
        break;
       case "E":
        rover2.direction = "N"
        break;
       case "W":
        rover2.direction = "S"   
        break;
     }

  console.log("Rover turns to: " + rover.direction);
  console.log("Rover2 turns to: " + rover2.direction);
}


function moveForward(rover){
	switch(rover.direction) {
      case "N":
      if (rover.y <= 0) {
        console.log("Rover is out of the map in the North");
        return false;
      }
      if (isObstacle(rover.x, (rover.y - 1))){
        return false;
      }
      rover.y = rover.y--;
      break;
    case "S":
      if(rover.y >= 9) {
        console.log("Rover is out of the map in the South");
        return false;
      }
      if(isObstacle(rover.x, (rover.y + 1))){
        return false;
      }
      rover.y = rover.y++;
      break;
    case "E":
      if(rover.x >= 9) {
        console.log("Rover is out of the map in the East");
        return false;
      }
      if (isObstacle((rover.x + 1), rover.y)){
        return false;
      }
      rover.x = rover.x++;
      break;
    case "W":
      if(rover.x <= 0) {
        console.log("Rover is out of the map in the West");
        return false;
      }
      if(isObstacle((rover.x - 1), rover.y)){
        return false;
      }
      rover.x = rover.x--;
      break;
  }
  Map(rover, rover2, "forward");
  return true;
}


function moveBackwards(rover) {
	switch (rover.direction) {
        case "N":
         if(rover.y >= 9){
          console.log("Rover is oi¡ut of the map in the South");
          return false;
        }
        if (isObstacle(rover.x, (rover.y + 1))) {
        return false;
      }
        rover.y = rover.y++;
            break;
        case "S":
        if (rover.y <= 0) {
        console.log("Rover is out of the map in the North");
        return false;
      }
      if (isObstacle(rover.x, (rover.y - 1))) {
        return false;
      }
          rover.y = rover.y--;
            break;
        case "E":
        if(rover.x <= 0) {
        console.log("Rover is out of the map in the West");
        return false;
      }
      if (isObstacle((rover.x - 1), rover.y)) {
        return false;
      }
          rover.x = rover.x--;
            break;
        case "W":
        if(rover.x >= 9) {
        console.log("Rover is out of the map in the East");
        return false;
      }
      if (isObstacle((rover.x + 1), rover.y)) {
        return false;
      }
          rover.x = rover.x++;
            break;
}

      Map(rover, rover2, "backwards");
  return true;

}


function isObstacle(x,y) {
  if(obstacles[y][x] == "Rock") {
    console.log('Obstacle in (' + y + ',' + x +') be careful!!');
    return true;
  }
  return false;
}

function Commands (rover, rover2) {
	var command = prompt( "Hi operator! Give me the sequence of commands to move the rover. Use f (forward), b (backwards), l (left) or r (right).");
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
  CoordinatesLog (rover, rover2);
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

Commands (rover, rover2);
