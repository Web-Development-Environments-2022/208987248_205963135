class Clock{
    constructor(){
        this.image = new Image();
        this.image.src = "Images/clock.png";
    }

    drawClock(centerClock){
        context.drawImage(this.image, centerClock.x-15, centerClock.y-15, 30, 30);
    }
}