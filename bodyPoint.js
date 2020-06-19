class bodyPoint {

    constructor (x, y) {
        this.x = x;
        this.y = y;
        //this.color = color || 1;
    }

    drawBodyPoint (colour) {
        
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
        
        fill(letters[colour]);

        circle (this.x, this.y, 20);
    }

}