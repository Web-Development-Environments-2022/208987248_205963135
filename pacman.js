class Pacman{
    constructor(){
        this.livesLeft = 5;
        this.interval = setInterval(UpdatePosition, 100);
        this.img_up = new Image(10,10);
        this.img_up.src = "./Images/pacman_up.png";
        this.img_down = new Image(10,10);
        this.img_down.src = "./Images/pacman_down.png";
        this.img_left = new Image(10,10);
        this.img_left.src = "./Images/pacman_left.png";
        this.img_right = new Image(10,10);
        this.img_right.src = "./Images/pacman_right.png";
        this.food_eaten = 0;
    }

    DrawPacman(center){
        // draw pacman by direction
        if (pacman.direction == "U"){
            context.drawImage(pacman.img_up, center.x-10, center.y-10, board.cell_width*0.7, 0.7*board.cell_height);
        }
        else if (pacman.direction == "D"){
            context.drawImage(pacman.img_down, center.x-10, center.y-10, board.cell_width*0.7,0.7* board.cell_height);
        }
        else if (pacman.direction == "R"){
            context.drawImage(pacman.img_right, center.x-10, center.y-10, board.cell_width*0.7,0.7* board.cell_height);
        }
        else{
            context.drawImage(pacman.img_left, center.x-10, center.y-10, board.cell_width*0.7,0.7* board.cell_height);
        }
    }
}