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
            [
                [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
                [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 4],
                [4, 0, 4, 4, 4, 0, 4, 4, 4, 4, 0, 4, 0, 4, 4, 0, 4],
                [4, 0, 4, 0, 0, 0, 4, 0, 0, 0, 0, 4, 0, 4, 0, 0, 4],
                [4, 0, 4, 0, 4, 0, 4, 0, 4, 4, 0, 4, 0, 4, 0, 0, 4],
                [4, 4, 4, 4, 4, 0, 4, 0, 4, 4, 4, 4, 4, 4, 4, 0, 4],
                [4, 0, 0, 0, 4, 0, 4, 0, 0, 0, 0, 4, 0, 0, 0, 0, 4],
                [4, 0, 4, 4, 4, 0, 4, 4, 4, 4, 0, 4, 0, 4, 4, 0, 4],
                [4, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 4, 0, 0, 0, 0, 4],
                [4, 0, 4, 4, 4, 0, 4, 0, 4, 4, 0, 4, 0, 0, 4, 0, 4],
                [4, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 4],
                [4, 4, 4, 4, 4, 0, 4, 0, 4, 4, 4, 0, 4, 4, 4, 4, 4],
                [4, 0, 0, 0, 0, 0, 4, 0, 4, 0, 4, 0, 4, 0, 4, 0, 4],
                [4, 0, 4, 0, 4, 0, 4, 0, 4, 0, 4, 0, 4, 0, 4, 0, 4],
                [4, 0, 4, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
                [4, 0, 4, 4, 4, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 4],
                [4, 0, 0, 0, 4, 0, 4, 4, 4, 4, 0, 4, 0, 4, 4, 4, 4],
                [4, 0, 4, 0, 4, 0, 0, 0, 4, 0, 0, 4, 0, 0, 0, 0, 4],
                [4, 0, 4, 0, 4, 0, 0, 0, 4, 0, 0, 4, 0, 0, 0, 0, 4],
                [4, 0, 4, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 4, 4, 4],
                [4, 0, 4, 0, 4, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 4],
                [4, 0, 4, 0, 4, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 4],
                [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]
            ];
            
            
            
            
            for (var j = 0; j < this.rowNum; j++) {
                if (
                (i == 0) || (j==0)|| (i== 19) ||(j==19)  || 
                (i == 3 && j == 3) || (i==3 && j==4) || (i==3 && j==5) || (i==3 && j==6)||
                (i==4 && j==6)|| (i==5 && j==6)|| (i==6 && j==6)|| (i==7 && j==6) ||
                (i==4 && j==17)|| (i==5 && j==17)|| (i==6 && j==17)|| (i==7 && j==17) ||
                (i==8 && j==17)|| (i==9 && j==17)|| (i==10 && j==17)|| (i==11 && j==17) ||
                (i==11 && j==16)|| (i==11 && j==15)|| (i==11 && j==14)|| (i==11 && j==13) ||
                (i==8 && j==2)|| (i==9 && j==2)|| (i==10 && j==2)|| (i==11 && j==2) || 
                (i==12 && j==2) ||(i==13 && j==2) ||(i==14 && j==2) ||(i==15 && j==2) ||
                (i==15 && j==3)|| (i==15 && j==4)|| (i==15 && j==5)|| (i==15 && j==6) ||
                (i==15 && j==7) ||
                (i==7 && j==10) ||(i==8 && j==10) ||(i==9 && j==10) ||(i==10 && j==10) ||
                (i==11 && j==10)|| (i==12 && j==10)|| (i==13 && j==10)|| (i==14 && j==10) ||
                (i==7 && j==11) ||(i==7 && j==12) ||(i==7 && j==13) ||(i==7 && j==14) ||
                (i==15 && j==15)|| (i==16 && j==15)|| (i==17 && j==15)||
                (i==17 && j==14) ||(i==17 && j==13) ||(i==17 && j==12) ||(i==17 && j==11) ||
                (i==3 && j==15)|| (i==3 && j==14)|| (i==3 && j==13)||
                (i==3 && j==12) ||(i==3 && j==11) ||(i==3 && j==9) ||(i==3 && j==10)
                ||(i==4 && j==10) ||(i==11 && j==3) ||(i==11 && j==4) ||(i==11 && j==5) ||
                (i==10 && j==8) ||(i==11 && j==8) ||(i==12 && j==8) ||
                (i==9 && j==8) ||(i==8 && j==8) ||(i==7 && j==8) ||(i==16 && j==4) 
                ||(i==17 && j==4) 
                
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