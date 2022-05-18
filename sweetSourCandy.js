class SweetSourCandy{
    constructor(){
        this.image = new Image();
        this.image.src = "Images/candy3.png";
        this.score = 0;
    }

    drawSweetSourCandy(centerSweetSourCandy){
        context.drawImage(this.image, centerSweetSourCandy.x-15, centerSweetSourCandy.y-15, 30, 30);
    }

    setScore(){
        let random = Math.random();
        if(random <= 0.5){
            this.score += 20
        }
        else{
            this.score -= 20
        }
    }
}