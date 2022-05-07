class Ghosts{
    constructor(color){
        this.color = color;
        this.direction = "RIGHT";
    }

    drawGhost(center, colPosition, rowPosition){
        if(this.color == "ORANGE"){
            
        }
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
        
    }
}