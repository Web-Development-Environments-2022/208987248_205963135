class Ghost{
    constructor(color, colPosition, rowPosition){
        this.color = color;
        this.direction = "RIGHT";
        this.prevCellValue = "Empty";
        this.colPosition = colPosition;
        this.rowPosition = rowPosition;
        this.orangeGhostRight = new Image();
        this.orangeGhostRight.src = "Images/orange_ghost_right.jpg";
        this.orangeGhostLeft = new Image();
        this.orangeGhostLeft.src = "Images/orange_ghost_left.jpg";
        this.redGhostRight = new Image();
        this.redGhostRight.src = "Images/red_ghost_right.jpg";
        this.redGhostLeft = new Image();
        this.redGhostLeft.src = "Images/red_ghost_left.jpg";
        this.pinkGhostRight = new Image();
        this.pinkGhostRight.src = "Images/pink_ghost_right.png";
        this.pinkGhostLeft = new Image();
        this.pinkGhostLeft.src = "Images/pink_ghost_left.png";
        this.greenGhostRight = new Image();
        this.greenGhostRight.src = "Images/green_ghost_right.jpg";
        this.greenGhostLeft = new Image();
        this.greenGhostLeft.src = "Images/green_ghost_left.jpg";
        // this.intervalGhost = setInterval(this.drawGhost, 400)
    }

    drawGhost(centerGhost){
        // console.log(this)
        // console.log("after")
        if(this.color == "ORANGE"){
            if(this.direction == "RIGHT"){
                // var orangeGhostRight = new Image();
                // orangeGhostRight.src = "Images/orange_ghost_right.jpg";
                context.drawImage(this.orangeGhostRight, centerGhost.x-15, centerGhost.y-15, 30, 30);
            }
            else if(this.direction == "LEFT"){
                // var orangeGhostLeft = new Image();
                // orangeGhostLeft.src = "Images/orange_ghost_left.jpg";
                context.drawImage(this.orangeGhostLeft, centerGhost.x-15, centerGhost.y-15, 30, 30);
            }
        }
        else if(this.color == "RED"){
            if(this.direction == "RIGHT"){
                // var redGhostRight = new Image();
                // redGhostRight.src = "Images/red_ghost_right.jpg";
                context.drawImage(this.redGhostRight, centerGhost.x-15, centerGhost.y-15, 30, 30);
            }
            else if(this.direction == "LEFT"){
                // var redGhostLeft = new Image();
                // redGhostLeft.src = "Images/red_ghost_left.jpg";
                context.drawImage(this.redGhostLeft, centerGhost.x-15, centerGhost.y-15, 30, 30);
            }
        }
        else if(this.color == "PINK"){
            if(this.direction == "RIGHT"){
                // var pinkGhostRight = new Image();
                // pinkGhostRight.src = "Images/pink_ghost_right.png";
                context.drawImage(this.pinkGhostRight, centerGhost.x-15, centerGhost.y-15, 30, 30);
            }
            else if(this.direction == "LEFT"){
                // var pinkGhostLeft = new Image();
                // pinkGhostLeft.src = "Images/pink_ghost_left.png";
                context.drawImage(this.pinkGhostLeft, centerGhost.x-15, centerGhost.y-15, 30, 30);
            }
        }
        else if(this.color == "GREEN"){
            if(this.direction == "RIGHT"){
                // var greenGhostRight = new Image();
                // greenGhostRight.src = "Images/green_ghost_right.jpg";
                context.drawImage(this.greenGhostRight, centerGhost.x-15, centerGhost.y-15, 30, 30);
            }
            else if(this.direction == "LEFT"){
                // var greenGhostLeft = new Image();
                // greenGhostLeft.src = "Images/green_ghost_left.jpg";
                context.drawImage(this.greenGhostLeft, centerGhost.x-15, centerGhost.y-15, 30, 30);
            }
        }
    }

    calculateDistance(pacmanX, pacmanY){
        let distanceArray = new Array();
        let minValue = Infinity;
        let minRowPostion = this.rowPosition;
        let minColPostion = this.colPosition;
        if(board[this.colPosition][this.rowPosition-1] != "Wall" && board[this.colPosition][this.rowPosition-1] != "Ghost"){
           let upValue = Math.sqrt(Math.pow(pacmanX-this.colPosition, 2) + Math.pow(pacmanY-(this.rowPosition-1), 2));
           if(upValue < minValue){
               minValue = upValue;
               minRowPostion = this.rowPosition-1;
               minColPostion = this.colPosition;
           }
        }
        if(board[this.colPosition][this.rowPosition+1] != "Wall" && board[this.colPosition][this.rowPosition+1] != "Ghost"){
            let downValue = Math.sqrt(Math.pow(pacmanX-this.colPosition, 2) + Math.pow(pacmanY-(this.rowPosition+1), 2))
            if(downValue < minValue){
                minValue = downValue;
                minRowPostion = this.rowPosition+1;
                minColPostion = this.colPosition;
            }
        }
        if(board[this.colPosition+1][this.rowPosition] != "Wall" && board[this.colPosition-1][this.rowPosition] != "Ghost"){
            let rightValue = Math.sqrt(Math.pow(pacmanX-(this.colPosition+1), 2) + Math.pow(pacmanY-this.rowPosition, 2))
            if(rightValue < minValue){
                minValue = rightValue;
                minRowPostion = this.rowPosition;
                minColPostion = this.colPosition+1;
            }
        }
        if(board[this.colPosition-1][this.rowPosition] != "Wall" && board[this.colPosition+1][this.rowPosition] != "Ghost"){
            let leftValue = Math.sqrt(Math.pow(pacmanX-(this.colPosition-1), 2) + Math.pow(pacmanY-this.rowPosition, 2))
            if(leftValue < minValue){
                minValue = leftValue;
                minRowPostion = this.rowPosition;
                minColPostion = this.colPosition-1;
            }
        }
        // console.log(minValue);
        return [minColPostion, minRowPostion]; // return the cell that will bring the ghost closest to the pacman
    }
}