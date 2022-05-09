class Ghost{
    constructor(color){
        this.color = color;
        this.direction = "RIGHT";
    }

    drawGhost(center, colPosition, rowPosition){
        if(this.color == "ORANGE"){
            if(this.direction == "RIGHT"){
                var orangeGhostRight = new Image();
                orangeGhostRight.src = "Images/orange_ghost_right.jpg";
            }
            else if(this.direction == "LEFT"){
                var orangeGhostLeft = new Image();
                orangeGhostLeft.src = "Images/orange_ghost_left.jpg";
            }
        }
        else if(this.color == "RED"){
            if(this.direction == "RIGHT"){
                var redGhostRight = new Image();
                redGhostRight.src = "Images/red_ghost_right.jpg";
            }
            else if(this.direction == "LEFT"){
                var redGhostLeft = new Image();
                redGhostLeft.src = "Images/red_ghost_left.jpg";
            }
        }
        else if(this.color == "PINK"){
            if(this.direction == "RIGHT"){
                var pinkGhostRight = new Image();
                pinkGhostRight.src = "Images/pink_ghost_right.png";
            }
            else if(this.direction == "LEFT"){
                var pinkGhostLeft = new Image();
                pinkGhostLeft.src = "Images/pink_ghost_left.png";
            }
        }
        else if(this.color == "GREEN"){
            if(this.direction == "RIGHT"){
                var greenGhostRight = new Image();
                greenGhostRight.src = "Images/green_ghost_right.jpg";
            }
            else if(this.direction == "LEFT"){
                var greenGhostLeft = new Image();
                greenGhostLeft.src = "Images/green_ghost_left.jpg";
            }
        }
    }
}