class Medicine{
    constructor(){
        this.image = new Image();
        this.image.src = "Images/1hearts.png";
    }

    drawMedicine(centerMedicine){
        context.drawImage(this.image, centerMedicine.x-15, centerMedicine.y-15, 30, 30);
    }
}