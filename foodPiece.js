class foodPiece {
    constructor (randomX, randomY) {
        this.x = randomX;
        this.y = randomY;
    }


    drawFood() {
        
        circle(this.x, this.y, 16);

    }


}