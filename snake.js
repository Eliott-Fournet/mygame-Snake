class Snake {

    constructor (speed) {

        this.x = WIDTH/2;
        this.y = HEIGHT/2;
        this.move = -2;
        this.headPositions = [];
        this.bodyPositions = [];
        this.snakeLength = 5;
        this.collision = false;
        this.cannibalism = false;
        this.speed = speed;
    }


    drawHead () {


        if (keyCode == 40) {
            this.goBottom ();
            this.headPositions.push(this.x);
            this.headPositions.push(this.y);
            this.move += 2;

        }

        if (keyCode == 38) {
            this.goTop ();
            this.headPositions.push(this.x);
            this.headPositions.push(this.y);
            this.move += 2;
        } 

        if (keyCode == 39) {
            this.goRight ();
            this.headPositions.push(this.x);
            this.headPositions.push(this.y);
            this.move += 2;
        }

        if (keyCode == 37) {
            this.goLeft ();
            this.headPositions.push(this.x);
            this.headPositions.push(this.y);
            this.move += 2;
        } 

        if (this.x > WIDTH) {
            this.x = 0;
        }

        if (this.x < 0) {
            this.x = WIDTH;
        }

        if (this.y > HEIGHT) {
            this.y = 0;
        }

        if (this.y < 0) {
            this.y = HEIGHT;
        }

        circle (this.x, this.y, 20);
    };

    drawBody () {

        this.bodyPositions = [];
        console.log(this.headPositions);

        for (let i = 1; i < this.snakeLength; i++) {


            this.bodyPositions.push(new bodyPoint (this.headPositions[this.move - (40/this.speed)*i], this.headPositions[(this.move+1) - (40/this.speed)*i]));


            this.bodyPositions.forEach(element => {
                element.drawBodyPoint();
            });
        }

        //console.log(this.bodyPositions);

        this.checkCannibalism(this.bodyPositions, this.x, this.y);

        

    }

    goRight () {
        this.x +=this.speed;
    }

    goBottom () {
        this.y +=this.speed;
    }

    goTop () {
        this.y -=this.speed;
    }

    goLeft () {
        this.x -=this.speed;
    }


checkCannibalism (array, x, y) {


    let cannibalism = false;

    array.forEach(function(bodyPoint, i) {

        if (i > 1) {
            let xCollision = bodyPoint.x > x - 18 && bodyPoint.x < x + 18;
            let yCollision = bodyPoint.y > y - 18 && bodyPoint.y < y + 18;

            if (xCollision && yCollision) {
                cannibalism = true;
            }
        };

    }); 

    if (cannibalism === true) {

        this.cannibalism = true;

    }

} 

}