class Ghost{
    constructor(color, centerGhost){
        this.color = color;
        this.direction = "RIGHT";
        this.centerGhost = centerGhost;
        this.prevLocation = "Empty";
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

    drawGhost(){
        // console.log(this)
        // console.log("after")
        if(this.color == "ORANGE"){
            if(this.direction == "RIGHT"){
                // var orangeGhostRight = new Image();
                // orangeGhostRight.src = "Images/orange_ghost_right.jpg";
                context.drawImage(this.orangeGhostRight, this.centerGhost.x-15, this.centerGhost.y-15, 30, 30);
            }
            else if(this.direction == "LEFT"){
                // var orangeGhostLeft = new Image();
                // orangeGhostLeft.src = "Images/orange_ghost_left.jpg";
                context.drawImage(this.orangeGhostLeft, this.centerGhost.x-15, this.centerGhost.y-15, 30, 30);
            }
        }
        else if(this.color == "RED"){
            if(this.direction == "RIGHT"){
                // var redGhostRight = new Image();
                // redGhostRight.src = "Images/red_ghost_right.jpg";
                context.drawImage(this.redGhostRight, this.centerGhost.x-15, this.centerGhost.y-15, 30, 30);
            }
            else if(this.direction == "LEFT"){
                // var redGhostLeft = new Image();
                // redGhostLeft.src = "Images/red_ghost_left.jpg";
                context.drawImage(this.redGhostLeft, this.centerGhost.x-15, this.centerGhost.y-15, 30, 30);
            }
        }
        else if(this.color == "PINK"){
            if(this.direction == "RIGHT"){
                // var pinkGhostRight = new Image();
                // pinkGhostRight.src = "Images/pink_ghost_right.png";
                context.drawImage(this.pinkGhostRight, this.centerGhost.x-15, this.centerGhost.y-15, 30, 30);
            }
            else if(this.direction == "LEFT"){
                // var pinkGhostLeft = new Image();
                // pinkGhostLeft.src = "Images/pink_ghost_left.png";
                context.drawImage(this.pinkGhostLeft, this.centerGhost.x-15, this.centerGhost.y-15, 30, 30);
            }
        }
        else if(this.color == "GREEN"){
            if(this.direction == "RIGHT"){
                // var greenGhostRight = new Image();
                // greenGhostRight.src = "Images/green_ghost_right.jpg";
                context.drawImage(this.greenGhostRight, this.centerGhost.x-15, this.centerGhost.y-15, 30, 30);
            }
            else if(this.direction == "LEFT"){
                // var greenGhostLeft = new Image();
                // greenGhostLeft.src = "Images/green_ghost_left.jpg";
                context.drawImage(this.greenGhostLeft, this.centerGhost.x-15, this.centerGhost.y-15, 30, 30);
            }
        }
    }
}