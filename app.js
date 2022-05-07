var context;
var shape = new Object();
var board;
var boardGame;
var score;
var pac_color;
var start_time;
var time_elapsed;
var interval;
var curColor5;
var curColor15;
var curColor25;
var pacman;

$(document).ready(function() {
	context = canvas.getContext("2d");
	$(window).keydown(function(event){
		if(event.keyCode == 13) {
		  event.preventDefault();
		  return false;
		}
	  });
	switchScreens("homeScreen")
	// Start();
	addK();
});

function Start() {
	boardGame = new Board(20, 20)
	board = boardGame.generateaBoard()
	pacman = new Pacman();
	curColor5 = newColor5;
	curColor15 = newColor15;
	curColor25 = newColor25;
	keysDown = {};
	addEventListener(
		"keydown",
		function(e) {
			keysDown[e.keyCode] = true;
		},
		false
	);
	addEventListener(
		"keyup",
		function(e) {
			keysDown[e.keyCode] = false;
		},
		false
	);
	interval = setInterval(UpdatePosition, 100);
}

function GetKeyPressed() {
	if (keysDown[curKeyNumUp]) {
		return "UP";
	}
	if (keysDown[curKeyNumDown]) {
		return "DOWN";
	}
	if (keysDown[curKeyNumLeft]) {
		return "LEFT";
	}
	if (keysDown[curKeyNumRight]) {
		return "RIGHT";
	}
}

function Draw() { //TODO change the drawings 
	canvas.width = canvas.width; //clean board
	lblScore.value = score;
	lblTime.value = time_elapsed;
	for (var i = 0; i < boardGame.colNum; i++) {
		for (var j = 0; j < boardGame.rowNum; j++) {
			var center = new Object();
			center.x = i * 60 + 30;
			center.y = j * 60 + 30;
			if (board[i][j] == "Pacman") {
				
				context.drawImage(pacman.imgRight, center.x-10, center.y-10, board.cellWidth*0.7, 0.7*board.cellHeight);
				// pacman.drawPacman(center);
				// context.beginPath();
				// context.arc(center.x, center.y, 30, 0.15 * Math.PI, 1.85 * Math.PI); // half circle
				// context.lineTo(center.x, center.y);
				// context.fillStyle = pac_color; //color
				// context.fill();
				// context.beginPath();
				// context.arc(center.x + 5, center.y - 15, 5, 0, 2 * Math.PI); // circle
				// context.fillStyle = "black"; //color
				// context.fill();
				// const img = new Image();
				// img.src = 'Images/pacman_right.png';
				// context.drawImage(img, center.x, center.y)
			} else if (board[i][j] == "Food5") { //TODO change food size and colors to 5 15 25
				context.beginPath();
				context.arc(center.x, center.y, 10, 0, 2 * Math.PI); // circle
				context.fillStyle = curColor5; //color
				context.fill();
			} 
			else if (board[i][j] == "Food15") { //TODO change food size and colors to 5 15 25
				context.beginPath();
				context.arc(center.x, center.y, 15, 0, 2 * Math.PI); // circle
				context.fillStyle = curColor15; //color
				context.fill();
			}
			else if (board[i][j] == "Food25") { //TODO change food size and colors to 5 15 25
				context.beginPath();
				context.arc(center.x, center.y, 20, 0, 2 * Math.PI); // circle
				context.fillStyle = curColor25; //color
				context.fill();
			}
			else if (board[i][j] == "Wall") {
				context.beginPath();
				context.rect(center.x - 30, center.y - 30, 60, 60);
				context.fillStyle = "grey"; //color
				context.fill();
			}
		}
	}
}

function UpdatePosition() {
	board[shape.i][shape.j] = "Empty";
	var x = GetKeyPressed();
	if (x == "UP") {
		pacman.direction = "UP";
		if (shape.j > 0 && board[shape.i][shape.j - 1] != "Wall") {
			shape.j--;
		}
	}
	if (x == "DOWN") {
		pacman.direction = "DOWN";
		if (shape.j < (boardGame.rowNum - 1) && board[shape.i][shape.j + 1] != "Wall") {
			shape.j++;
		}
	}
	if (x == "LEFT") {
		pacman.direction = "LEFT";
		if (shape.i > 0 && board[shape.i - 1][shape.j] != "Wall") {
			shape.i--;
		}
	}
	if (x == "RIGHT") {
		pacman.direction = "RIGHT";
		if (shape.i < (boardGame.colNum - 1) && board[shape.i + 1][shape.j] != "Wall") {
			shape.i++;
		}
	}
	if (board[shape.i][shape.j] == "Food5") {
		score += 5;
	}
	else if (board[shape.i][shape.j] == "Food15") {
		score += 15;
	}
	else if (board[shape.i][shape.j] == "Food25") {
		score += 25;
	}
	board[shape.i][shape.j] = "Pacman";
	var currentTime = new Date();
	time_elapsed = (currentTime - start_time) / 1000;
	// if (score >= 20 && time_elapsed <= 10) {
	// 	pac_color = "green";
	// }
	// TODO change the alert window in game over modal
	if (time_elapsed > curMaxGameTime && score >= 100) { //todo change to num of total points
		window.clearInterval(interval);
		window.alert("Winner");
	}
	else if(time_elapsed > curMaxGameTime && score < 100){
		window.clearInterval(interval);
		window.alert("You are better than " + score + " points!");
	}
	else if(pacman.livesLeft == 0){
		window.clearInterval(interval);
		window.alert("Loser!");
	}
	else {
		Draw();
	}
}

function switchScreens(screenId, settingScreen=false){
    // if (pacman != undefined){
    //     resetGame();
    // }
    hideScreens();
    $('#'+screenId).show();
    $('#'+screenId).focus();
	if(settingScreen){
		$('#settingScreen').show();
	}
};

function hideScreens(){
    $(".screen").hide();
}