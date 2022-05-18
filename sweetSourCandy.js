class SweetSourCandy{
    constructor(){
        this.image = new Image();
<<<<<<< HEAD
        this.image.src = "Images/candy3.png";
=======
        this.image.src = "Images/candy.png";
>>>>>>> dff9a1e484588e8dccd770598cfb83a46e5fe8b5
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