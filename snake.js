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
        this.colour = 1;
        
    }


    drawHead () {

        let a = color(0, 210, 250);
        let b = color(219, 217,52);
        let c = color(240, 28, 0);
        let d = color(0, 47, 255);
        let e = color(48, 255, 0);
        let f = color(240, 81, 240);
        let g = color(255, 255, 255);
        let h = color(240, 81, 240);
        let i = color(55, 255, 0);
        let j = color(0,255,217);
        let k = color(255, 89, 21);
        let l = color(10,255,0);

        let letters = [a, b, c, d, e, f, g, h, i, j, k, l];

        fill(letters[this.colour]);

        if (keyCode == 40) {
            this.goBottom ();
            this.headPositions.unshift(this.x);
            this.headPositions.unshift(this.y);
            this.move += 2;

        }

        if (keyCode == 38) {
            this.goTop ();
            this.headPositions.unshift(this.x);
            this.headPositions.unshift(this.y);
            this.move += 2;
        } 

        if (keyCode == 39) {
            this.goRight ();
            this.headPositions.unshift(this.x);
            this.headPositions.unshift(this.y);
            this.move += 2;
        }

        if (keyCode == 37) {
            this.goLeft ();
            this.headPositions.unshift(this.x);
            this.headPositions.unshift(this.y);
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


        for (let i = 1; i < this.snakeLength; i++) {


            this.bodyPositions.push(new bodyPoint (this.headPositions[(40/this.speed)*i + 1], this.headPositions[(40/this.speed)*i]));



            this.bodyPositions.forEach(element => {
                element.drawBodyPoint(this.colour);
            });
        }


        //this.headPositions = this.headPositions[0] || 0;
        //this.headPositions.length = this.snakeLength * 10;


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