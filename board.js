class Board {
    constructor(rowNum, colNum) {
        this.rowNum = rowNum;
        this.colNum = colNum;
        this.cellWidth = document.getElementById("canvas").width/this.colNum;
        this.cellHeight = document.getElementById("canvas").height/this.rowNum;
        this.cellNum = this.colNum * this.rowNum
        this.newBoard = new Array()
    }

    generateaBoard(){
	    score = 0;
        var food_remain = curNumOfFoodPoints;
        var pacman_remain = 1;
        start_time = new Date();
        let heartImage = document.getElementById("hearts");
        heartImage.width = pacman.livesLeft*20;
        heartImage.src = "Images/" + pacman.livesLeft + "hearts.png"
	    ghostLocation = [[1,1], [1,18], [18,1], [18,18]];
        // ghostLocation = ghostLocation.slice(0, curNumOfMonsters);
        var index = 0;
        for (var i = 0; i < this.colNum; i++) {
            this.newBoard[i] = new Array();
            for (var j = 0; j < this.rowNum; j++) {
                if(index < curNumOfMonsters && i == ghostLocation[index][0] && j == ghostLocation[index][1]){
                    this.newBoard[i][j] = "Ghost"; //ghost
                    index++;
                }
                else if(i == 9 && j == 9){
                    movingFoodLocation.i = i;
                    movingFoodLocation.j = j;
                    this.newBoard[i][j] = "MovingFood"; //moving food
                }
                else if (
                (i == 0) || (j==0)|| (i== 19) ||(j==19)  || 
                (i == 3 && j == 3) || (i==3 && j==4) || (i==3 && j==5) || (i==3 && j==6)||
                (i==4 && j==6)|| (i==5 && j==6)|| (i==6 && j==6)|| (i==7 && j==6) ||
                (i==4 && j==17)|| (i==5 && j==17)|| (i==6 && j==17)|| (i==7 && j==17) ||
                (i==8 && j==17)|| (i==9 && j==17)|| (i==10 && j==17)|| (i==11 && j==17) ||
                (i==11 && j==16)|| (i==11 && j==15)|| (i==11 && j==14)|| (i==11 && j==13) ||
                (i==8 && j==2)|| (i==9 && j==2)|| (i==10 && j==2)|| (i==11 && j==2) || 
                (i==12 && j==2) ||(i==13 && j==2)  ||(i==15 && j==2) ||
                (i==15 && j==3)|| (i==15 && j==4)|| (i==15 && j==5)|| (i==15 && j==6) ||
                (i==15 && j==7) ||
                (i==7 && j==10) ||(i==8 && j==10) ||(i==9 && j==10) ||(i==10 && j==10) ||
                (i==11 && j==10)|| (i==12 && j==10)|| (i==13 && j==10)|| (i==14 && j==10) ||
                (i==7 && j==11) ||(i==7 && j==12) ||(i==7 && j==13) ||(i==7 && j==14) ||
                 (i==16 && j==15)|| (i==17 && j==15)||
                (i==17 && j==14) ||(i==17 && j==13) ||(i==17 && j==12) ||(i==17 && j==11) ||
                (i==3 && j==15)|| (i==3 && j==14)|| (i==3 && j==13)||
                (i==3 && j==12) ||(i==3 && j==11) ||(i==3 && j==9) ||(i==3 && j==10)
                ||(i==4 && j==10) ||(i==11 && j==3) ||(i==11 && j==4) ||(i==11 && j==5) ||
                (i==10 && j==8) ||(i==11 && j==8) ||(i==12 && j==8) ||
                (i==9 && j==8) ||(i==8 && j==8) ||(i==7 && j==8) ||(i==16 && j==4) 
                ||(i==17 && j==4) || (i==5 && j==2) || (i==5 && j==3) || (i==5 && j==4)
                || (i==5 && j==1) || (i==6 && j==4) || (i==7 && j==4) || (i==8 && j==4) 
                || (i==9 && j==4) || (i==17 && j==17) || (i==18 && j==17) || (i==16 && j==17) 
                || (i==15 && j==17) || (i==14 && j==17)  || (i==13 && j==17) || (i==18 && j==10)
                || (i==17 && j==10)  || (i==16 && j==10) || (i==13 && j==14) || (i==14 && j==14)
                || (i==14 && j==13)  || (i==14 && j==12) || (i==13 && j==12) || (i==18 && j==8) 
                || (i==17 && j==8) || (i==5 && j==14) || (i==5 && j==15) || (i==5 && j==16) 
                || (i==5 && j==13) || (i==5 && j==12) || (i==9 && j==11) || (i==9 && j==12) 
                || (i==9 && j==13)|| (i==9 && j==14) || (i==9 && j==15)  || (i==1 && j==10) || (i==2 && j==10) 
                || (i==13 && j==3) || (i==13 && j==4) || (i==13 && j==5) || (i==13 && j==6) 
                || (i==12 && j==9) 
                ) {
                    this.newBoard[i][j] = "Wall"; //wall
                } else {
                    var randomNum = Math.random();
                    if (randomNum <= (1.0 * food_remain) / this.cellNum) {
                        this.generateFoodType(i, j);
                        food_remain--;
                    } else if (randomNum < (1.0 * (pacman_remain + food_remain)) / this.cellNum) {
                        pacmanLocation.i = i;
                        pacmanLocation.j = j;
                        pacman_remain--;
                        this.newBoard[i][j] = "Pacman"; //pacman location
                    } else {
                        this.newBoard[i][j] = "Empty"; //nothing
                    }
                    this.cellNum--;
                }
            }
        }
        if(pacman_remain == 1){
            let emptyPacmanCell = this.getRandomEmptyCell();
            pacmanLocation.i = emptyPacmanCell[0];
            pacmanLocation.j = emptyPacmanCell[1];
            pacman_remain--;
            this.newBoard[emptyPacmanCell[0]][emptyPacmanCell[1]] = "Pacman"; //pacman location
        }
        while (food_remain > 0) { //adding all the food remains if left
            var emptyCell = this.getRandomEmptyCell();
            this.generateFoodType(emptyCell[0], emptyCell[1]);
            food_remain--;
        }
        if(medicine != undefined){ // todo maybe change to create object
            let emptyMedicineCell = this.getRandomEmptyCell();
            medicineLocation.i = emptyMedicineCell[0];
            medicineLocation.j = emptyMedicineCell[1];
            this.newBoard[emptyMedicineCell[0]][emptyMedicineCell[1]] = "Medicine"; //Medicine location
        }
        if(clock != undefined){ // todo maybe change to create object
            let emptyClockCell = this.getRandomEmptyCell();
            clockLocation.i = emptyClockCell[0];
            clockLocation.j = emptyClockCell[1];
            this.newBoard[emptyClockCell[0]][emptyClockCell[1]] = "Clock"; //Clock location
        }
        return this.newBoard
    }

    getRandomEmptyCell() {
        var i = Math.floor(Math.random() * this.colNum); 
        var j = Math.floor(Math.random() * this.rowNum);
        while (this.newBoard[i][j] != "Empty") { // while cell is not empty generate new i and j
            var i = Math.floor(Math.random() * this.colNum); 
            var j = Math.floor(Math.random() * this.rowNum);
        }
        return [i, j];
    }

    generateFoodType(i, j){
        var randomFoodNum = Math.random();
        if(randomFoodNum <= 0.6){
            this.newBoard[i][j] = "Food5";
        }
        else if(randomFoodNum > 0.6 && randomFoodNum <= 0.9){
            this.newBoard[i][j] = "Food15";
        }
        else{
            this.newBoard[i][j] = "Food25";
        }
    }
  }