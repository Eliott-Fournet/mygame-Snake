console.log("hello world ");

const newGame = new Game;
const food = new foodPiece;

function preload() {

}

function setup() {
    createCanvas(WIDTH, HEIGHT);
    newGame.setUpFood();
}

function draw() {
    background (255, 255, 153);
    newGame.drawGame(); 
    //food.drawFood(new foodPiece(Math.floor(Math.random()*WIDTH), Math.floor(Math.random()*HEIGHT)));
}

