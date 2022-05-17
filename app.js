var context;
var pacmanLocation = new Object();
var boardGame;
var board;
var score;
var pac_color;
var start_time;
var time_elapsed;
var interval;
var intervalGhost;
var intervalMovingFood;
var curColor5;
var curColor15;
var curColor25;
var pacman;
var ghostsColors;
var ghostIndex = 0;
var ghostLocation;
var ghostsArray;
var drawGhostIndex;
var movingFood;
var movingFoodLocation = new Object();
var medicine;
var medicineLocation = new Object();
var clock;
var clockLocation = new Object();
var timeReduction;
var sound;
var die;
var eat;

$(document).ready(function() {
	context = canvas.getContext("2d");
	$(window).keydown(function(event){
		if(event.keyCode == 13) {
		  event.preventDefault();
		  return false;
		}
	  });
	switchScreens("homeScreen")
	switchHeaders('.navbar-container-logged-in', '.navbar-container');
	// Start();
	addK();
});

function Start() {
	boardGame = new Board(20, 20)
	pacman = new Pacman();
	movingFood = new MovingFood();
	medicine = new Medicine()
	clock = new Clock();
	board = boardGame.generateaBoard()
	//background music
	sound = document.getElementById("myAudio");
	sound.volume = 0.2;
	sound.currentTime = 0;
	document.getElementById('accept').checked = true;
	//eat&die
	eat = document.getElementById("chomp");
	eat.volume = 0.2;
	die = document.getElementById("death");
	die.volume = 0.2;
	manageSound();
	startAgain();
}

function startAgain(){
	if(interval != undefined){
		window.clearInterval(interval);
	}
	if(intervalGhost != undefined){
		window.clearInterval(intervalGhost);
	}
	if(intervalMovingFood != undefined){
		window.clearInterval(intervalMovingFood);
	}
	if(pacman == undefined){
		pacman = new Pacman();
	}
	timeReduction = 0;
	ghostsColors = ["ORANGE", "RED", "PINK", "GREEN"];
	ghostLocation = [[1,1], [1,18], [18,1], [18,18]];
	// ghostsColors = ghostsColors.slice(0,curNumOfMonsters);
	ghostsArray = new Array();
	for(let i=0;i<curNumOfMonsters;i++){
		ghostsArray.push(new Ghost(ghostsColors[i], ghostLocation[i][0], ghostLocation[i][1]));
		// console.log(ghostsArray[i]);
		// console.log(pacman);
	}
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
	Draw();
	intervalGhost = setInterval(updateGhostPosition, 375);
	intervalMovingFood = setInterval(updateMovingFoodPosition, 250);
	interval = setInterval(UpdatePosition, 125);
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

function Draw() {
	canvas.width = canvas.width; //clean board
	canvas.style.border = '1px solid #000000'
	lblScore.value = score;
	lblTime.value = (time_elapsed - timeReduction).toFixed(3);
	drawGhostIndex = 0;
	for (var i = 0; i < boardGame.colNum; i++) {
		for (var j = 0; j < boardGame.rowNum; j++) {
			var center = new Object();
			center.x = i * 30 + 15;
			center.y = j * 30 + 15;
			if (board[i][j] == "Pacman") {
				pacmanLocation.i = i;
				pacmanLocation.j = j;
				pacman.drawPacman(center);
			} 
			else if (board[i][j] == "Food5") {
				context.beginPath();
				context.arc(center.x, center.y, 3, 0, 2 * Math.PI); // circle
				context.fillStyle = curColor5; //color
				context.fill();
			} 
			else if (board[i][j] == "Food15") {
				context.beginPath();
				context.arc(center.x, center.y, 5, 0, 2 * Math.PI); // circle
				context.fillStyle = curColor15; //color
				context.fill();
			}
			else if (board[i][j] == "Food25") {
				context.beginPath();
				context.arc(center.x, center.y, 7, 0, 2 * Math.PI); // circle
				context.fillStyle = curColor25; //color
				context.fill();
			}
			else if (board[i][j] == "Wall") {
				context.beginPath();
				context.rect(center.x - 15, center.y - 15, 30, 30);
				context.fillStyle = "#2e2d2d"; //color
				context.fill();
			}
			else if (board[i][j] == "Ghost") {
				if(drawGhostIndex < curNumOfMonsters){
					ghostsArray[drawGhostIndex++].drawGhost(center);
				}
			}
			else if (board[i][j] == "MovingFood") {
				movingFood.drawMovingFood(center);
			}
			else if (board[i][j] == "Medicine") {
				medicine.drawMedicine(center);
			}
			else if (board[i][j] == "Clock") {
				clock.drawClock(center);
			}
		}
	}
}


function updateMovingFoodPosition(){
	if(movingFood.caught){
		window.clearInterval(intervalMovingFood);
		return;
	}
	let direction = ["UP", "DOWN", "LEFT", "RIGHT"];
	let randomDirection = direction[Math.floor(Math.random() * 4)]
	while(randomDirection == movingFood.prevDirection){
		randomDirection = direction[Math.floor(Math.random() * 4)]
	}
	board[movingFoodLocation.i][movingFoodLocation.j] = movingFood.prevCellValue;
	if (randomDirection == "UP") {
		movingFood.prevDirection = "UP";
		if (movingFoodLocation.j > 0 && board[movingFoodLocation.i][movingFoodLocation.j - 1] != "Wall") {
			movingFoodLocation.j--;
		}
	}
	if (randomDirection == "DOWN") {
		movingFood.prevDirection = "DOWN";
		if (movingFoodLocation.j < (boardGame.rowNum - 1) && board[movingFoodLocation.i][movingFoodLocation.j + 1] != "Wall") {
			movingFoodLocation.j++;
		}
	}
	if (randomDirection == "LEFT") {
		movingFood.prevDirection = "LEFT";
		if (movingFoodLocation.i > 0 && board[movingFoodLocation.i - 1][movingFoodLocation.j] != "Wall") {
			movingFoodLocation.i--;
		}
	}
	if (randomDirection == "RIGHT") {
		movingFood.prevDirection = "RIGHT";
		if (movingFoodLocation.i < (boardGame.colNum - 1) && board[movingFoodLocation.i + 1][movingFoodLocation.j] != "Wall") {
			movingFoodLocation.i++;
		}
	}
	if(board[movingFoodLocation.i][movingFoodLocation.j] != "Pacman"){
		movingFood.prevCellValue = board[movingFoodLocation.i][movingFoodLocation.j];
	}
	else{
		movingFood.caught = true;
	}
	if(!movingFood.caught){
		board[movingFoodLocation.i][movingFoodLocation.j] = "MovingFood";
	}
	// movingFood.drawMovingFood(movingFoodLocation);
}


function updateGhostPosition(){
	for(let i=0;i<curNumOfMonsters;i++){
		newGhostLocation = ghostsArray[i].calculateDistance(pacmanLocation.i, pacmanLocation.j);
		if(ghostsArray[i].colPosition > newGhostLocation[0]){
			ghostsArray[i].direction = "LEFT";
		}
		else if (ghostsArray[i].colPosition < newGhostLocation[0]){
			ghostsArray[i].direction = "RIGHT";
		}
		board[ghostsArray[i].colPosition][ghostsArray[i].rowPosition] = ghostsArray[i].prevCellValue;
		// console.log(newGhostLocation);
		ghostsArray[i].prevCellValue = board[newGhostLocation[0]][newGhostLocation[1]];
		ghostsArray[i].colPosition = newGhostLocation[0];
		ghostsArray[i].rowPosition = newGhostLocation[1];
		if(board[ghostsArray[i].colPosition][ghostsArray[i].rowPosition] == "Pacman"){
			pacman.livesLeft--;
			let heartImage = document.getElementById("hearts");
			heartImage.width = pacman.livesLeft*20;
        	heartImage.src = "Images/" + pacman.livesLeft + "hearts.png"
			pacman.direction = "RIGHT";
			score -= 10;
			board[pacmanLocation.i][pacmanLocation.j] = "Empty";
			console.log(pacman.livesLeft);
			window.clearInterval(interval);
			window.clearInterval(intervalGhost);
			window.clearInterval(intervalMovingFood);
			restartGame();
			return;
		}
		board[ghostsArray[i].colPosition][ghostsArray[i].rowPosition] = "Ghost";
		let centerGhost = new Object();
		centerGhost.x = ghostsArray[i].colPosition * 30 + 15;
		centerGhost.y = ghostsArray[i].rowPosition * 30 + 15;
		// ghostsArray[i].drawGhost(centerGhost);
	}
}

function UpdatePosition() {
	if (pacmanLocation.i==undefined || pacmanLocation.j==undefined){
		return
	}
	board[pacmanLocation.i][pacmanLocation.j] = "Empty";
	var x = GetKeyPressed();
	if (x == "UP") {
		pacman.direction = "UP";
		if (pacmanLocation.j > 0 && board[pacmanLocation.i][pacmanLocation.j - 1] != "Wall") {
			pacmanLocation.j--;
		}
	}
	if (x == "DOWN") {
		pacman.direction = "DOWN";
		if (pacmanLocation.j < (boardGame.rowNum - 1) && board[pacmanLocation.i][pacmanLocation.j + 1] != "Wall") {
			pacmanLocation.j++;
		}
	}
	if (x == "LEFT") {
		pacman.direction = "LEFT";
		if (pacmanLocation.i > 0 && board[pacmanLocation.i - 1][pacmanLocation.j] != "Wall") {
			pacmanLocation.i--;
		}
	}
	if (x == "RIGHT") {
		pacman.direction = "RIGHT";
		if (pacmanLocation.i < (boardGame.colNum - 1) && board[pacmanLocation.i + 1][pacmanLocation.j] != "Wall") {
			pacmanLocation.i++;
		}
	}
	if (board[pacmanLocation.i][pacmanLocation.j] == "Food5") {
		score += 5;
		eat.play();
	}
	else if (board[pacmanLocation.i][pacmanLocation.j] == "Food15") {
		score += 15;
		eat.play();

	}
	else if (board[pacmanLocation.i][pacmanLocation.j] == "Food25") {
		score += 25;
		eat.play();

	}
	else if (board[pacmanLocation.i][pacmanLocation.j] == "MovingFood") {
		movingFood.caught = true;
		score += 50;
		eat.play();

	}
	else if (board[pacmanLocation.i][pacmanLocation.j] == "Medicine") {
		pacman.livesLeft++;
		let heartImage = document.getElementById("hearts");
		heartImage.width = pacman.livesLeft*20;
        heartImage.src = "Images/" + pacman.livesLeft + "hearts.png";
		console.log(pacman.livesLeft);
	}
	else if (board[pacmanLocation.i][pacmanLocation.j] == "Clock") {
		if(time_elapsed >= 10){
			timeReduction += 10;
		}
		else{
			timeReduction += time_elapsed;
		}
	}
	if (board[pacmanLocation.i][pacmanLocation.j] == "Ghost"){
		pacman.livesLeft--;
		let heartImage = document.getElementById("hearts");
		heartImage.width = pacman.livesLeft*20;
        heartImage.src = "Images/" + pacman.livesLeft + "hearts.png"
		score -= 10;
		board[pacmanLocation.i][pacmanLocation.j] = "Empty";
		console.log(pacman.livesLeft);
		window.clearInterval(interval);
		window.clearInterval(intervalGhost);
		window.clearInterval(intervalMovingFood);
		die.play();
		restartGame();
		return;
	}
	else{
		board[pacmanLocation.i][pacmanLocation.j] = "Pacman";
	}
	var currentTime = new Date();
	time_elapsed = (currentTime - start_time) / 1000;
	// if (score >= 20 && time_elapsed <= 10) {
	// 	pac_color = "green";
	// }
	// TODO change the alert window in game over modal
	if (time_elapsed > curMaxGameTime && score >= 100) { //todo change to num of total points
		// window.clearInterval(interval);
		window.alert("Winner");
		time_elapsed = 0;
		score = 0;
		pacman.livesLeft = 5;
		window.clearInterval(interval);
		window.clearInterval(intervalGhost);
		window.clearInterval(intervalMovingFood);
		switchScreens("settingScreen");
		document.getElementById('accept').checked = false;
		manageSound();
		return;
	}
	else if(time_elapsed > curMaxGameTime && score < 100){
		// window.clearInterval(interval);
		window.alert("You are better than " + score + " points!");
		time_elapsed = 0;
		score = 0;
		pacman.livesLeft = 5;
		window.clearInterval(interval);
		window.clearInterval(intervalGhost);
		window.clearInterval(intervalMovingFood);
		switchScreens("settingScreen");
		document.getElementById('accept').checked = false;
		manageSound();
		return;
	}
	else 
	if(pacman.livesLeft == 0){
		// window.clearInterval(interval);
		window.alert("Loser!");
		time_elapsed = 0;
		score = 0;
		pacman.livesLeft = 5;
		window.clearInterval(interval);
		window.clearInterval(intervalGhost);
		window.clearInterval(intervalMovingFood);
		switchScreens("settingScreen");
		document.getElementById('accept').checked = false;
		manageSound();
		return;
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

function restartGame(){
	window.clearInterval(intervalGhost);
	window.clearInterval(intervalMovingFood);
	window.clearInterval(interval);
	emptyCell = boardGame.getRandomEmptyCell();
	board[emptyCell[0]][emptyCell[1]] = "Pacman";
	restartGhost();
	startAgain();
}

function restartGhost(){
	ghostLocation = [[1,1], [1,18], [18,1], [18,18]];
	// ghostLocation = ghostLocation.slice(0, curNumOfMonsters);
	var index = 0;
	for (var i = 0; i < boardGame.colNum; i++) {
		for (var j = 0; j < boardGame.rowNum; j++) {
			if(board[i][j] == "Ghost"){
				board[i][j] = "Empty";
			}
			if(index < curNumOfMonsters && i == ghostLocation[index][0] && j == ghostLocation[index][1]){
				board[i][j] = "Ghost"; //ghost
				index++;
			}
		}
	}
}

function manageSound()
{
	soundButton = document.getElementById("accept");
	if (soundButton.checked){
		sound.play();
	}
	else{
		sound.pause();
	}
}


