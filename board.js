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
	    pac_color = "yellow";
        var food_remain = curNumOfFoodPoints;
        var pacman_remain = 1;
        start_time = new Date();
        for (var i = 0; i < this.colNum; i++) {
            this.newBoard[i] = new Array();
            //put obstacles in (i=3,j=3) and (i=3,j=4) and (i=3,j=5), (i=6,j=1) and (i=6,j=2)
            //TODO change walls to be at random places
            for (var j = 0; j < this.rowNum; j++) {
                if (
                    (i == 3 && j == 3) ||
                    (i == 3 && j == 4) ||
                    (i == 3 && j == 5) ||
                    (i == 6 && j == 1) ||
                    (i == 6 && j == 2)
                ) {
                    this.newBoard[i][j] = "Wall"; //wall
                } else {
                    var randomNum = Math.random();
                    if (randomNum <= (1.0 * food_remain) / this.cellNum) {
                        this.generateFoodType(i, j);
                        food_remain--;
                    } else if (randomNum < (1.0 * (pacman_remain + food_remain)) / this.cellNum) {
                        shape.i = i;
                        shape.j = j;
                        pacman_remain--;
                        this.newBoard[i][j] = "Pacman"; //pacman location
                    } else {
                        this.newBoard[i][j] = "Empty"; //nothing
                    }
                    this.cellNum--;
                }
            }
        }
        while (food_remain > 0) { //adding all the food remains if left
            var emptyCell = this.findRandomEmptyCell();
            this.generateFoodType(emptyCell[0], emptyCell[1]);
            food_remain--;
        }
        return this.newBoard
    }

    findRandomEmptyCell() {
        var i = Math.floor(Math.random() * (this.colNum - 1) + 1); 
        var j = Math.floor(Math.random() * (this.rowNum - 1) + 1);
        while (this.newBoard[i][j] != "Empty") { // while cell is not empty generate new i and j
            var i = Math.floor(Math.random() * (this.colNum - 1) + 1); 
            var j = Math.floor(Math.random() * (this.rowNum - 1) + 1);
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