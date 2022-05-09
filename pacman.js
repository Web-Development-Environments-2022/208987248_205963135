class Pacman{
    constructor(){
        this.livesLeft = 5;
        // this.interval = setInterval(UpdatePosition, 150);
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
        if (this.direction == "UP"){
            context.drawImage(this.imgUp, center.x-15, center.y-15, 30, 30);
        }
        else if (this.direction == "DOWN"){
            context.drawImage(this.imgDown, center.x-15, center.y-15, 30, 30);
        }
        else if (this.direction == "RIGHT"){
            context.drawImage(this.imgRight, center.x-15, center.y-15, 30, 30);
        }
        else if (this.direction == "LEFT"){
            context.drawImage(this.imgLeft, center.x-15, center.y-15, 30, 30);
        }
    }
}