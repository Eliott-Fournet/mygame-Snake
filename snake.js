class Snake {

    constructor () {

        this.x = 100;
        this.y = 100;
        this.move = -2;
        this.headPositions = []
        this.snakeLength = 5;
    }


    drawHead () {

        if (keyCode == 40) {
            this.goBottom ();
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

        if (keyCode == 38) {
            this.goTop ();
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

            
        circle (this.x, this.y, 20);
    };

    drawBody () {

        for (let i = 0; i < this.snakeLength; i++) {
            //console.log("printing circles", this.headPositions[this.move - 40*i], this.headPositions[(this.move+1) - 40*i], this.headPositions, this.move);
            circle (this.headPositions[this.move - 40*i], this.headPositions[(this.move+1) - 40*i], 20);
        }

    }

    goRight () {
        this.x++;
    }

    goBottom () {
        this.y ++;
    }

    goTop () {
        this.y --;
    }

    goLeft () {
        this.x --;
    }

}