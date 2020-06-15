console.log("game.js is linked")

class Game {

    constructor () {
        this.player = new Snake();
        this.foodPieces = [];
    }    


    drawTheSnake () {
        this.player.drawHead();
        this.player.drawBody();
    }


    setUpFood () {

        while (this.foodPieces.length < 7) {
            
            this.foodPieces.push(new foodPiece(Math.floor(Math.random()*WIDTH), Math.floor(Math.random()*HEIGHT)));

        }
  
    }

    drawGame() {

        this.drawTheSnake();

        this.foodPieces.forEach((element) => {

            element.drawFood(element.x, element.y)
            
        });

        this.checkCollisions();
        
    }

    checkCollisions () {


        this.foodPieces.forEach((element) => {

            let xCollision = element.x > this.player.x - 20 && element.x < this.player.x + 20;
            let yCollision = element.y > this.player.y - 20 && element.y < this.player.y + 20;

            if (xCollision && yCollision) {
                console.log("collision !");
                this.foodPieces.splice(this.foodPieces.indexOf(element), 1);
                this.foodPieces.push(new foodPiece(Math.floor(Math.random()*WIDTH), Math.floor(Math.random()*HEIGHT)));
                this.player.snakeLength ++;


            }


        })

    }


}