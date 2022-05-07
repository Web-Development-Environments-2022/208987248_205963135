class Pacman{
    constructor(){
        this.livesLeft = 5;
        this.interval = setInterval(UpdatePosition, 100);
        this.imgUp = new Image();
        this.imgUp.src = "Images/pacman_up.png";
        this.imgDown = new Image();
        this.imgDown.src = "Images/pacman_down.png";
        this.imgLeft = new Image();
        this.imgLeft.src = "Images/pacman_left.png";
        this.imgRight = new Image();
        this.imgRight.src = "Images/pacman_right.png";
        this.direction = "RIGHT";
    }

    drawPacman(center){
        // draw pacman by direction
        console.log("drawPacman")
        if (this.direction == "UP"){
            console.log("UP")
            context.drawImage(this.imgUp, center.x-10, center.y-10, board.cellWidth*0.7, 0.7*board.cellHeight);
        }
        else if (this.direction == "DOWN"){
            console.log("DOWN")
            context.drawImage(this.imgDown, center.x-10, center.y-10, board.cellWidth*0.7, 0.7*board.cellHeight);
        }
        else if (this.direction == "RIGHT"){
            console.log("RIGHT")
            context.drawImage(this.imgRight, center.x-10, center.y-10, board.cellWidth*0.7, 0.7*board.cellHeight);
        }
        else{
            console.log("LEFT")
            context.drawImage(this.imgLeft, center.x-10, center.y-10, board.cellWidth*0.7, 0.7*board.cellHeight);
        }
    }
}