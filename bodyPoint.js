class bodyPoint {

    constructor (x, y) {
        this.x = x;
        this.y = y;
    }

    drawBodyPoint () {
        circle (this.x, this.y, 20);
    }

}