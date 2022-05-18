class MovingFood{
    constructor(){
        this.image = new Image();
        this.image.src = "Images/money.png";
        this.prevCol = 9;
        this.prevRow = 9;
        this.prevDirection = "LEFT"
        this.prevCellValue = "Empty"
        this.caught = false;
    }

    drawMovingFood(centerMovingFood){
        context.drawImage(this.image, centerMovingFood.x-15, centerMovingFood.y-15, 30, 30);
    }
}