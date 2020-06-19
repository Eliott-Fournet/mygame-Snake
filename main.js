console.log("hello world ");

let newGame = new Game(4);

let highScore = 1;

let menuMusic;

function preload() {
    menuMusic = loadSound('menuMusic.mp3');
    gameMusic = loadSound('musicGame.mp3');
    startMusic = loadSound('startMusic.mp3');
    foodSound = loadSound('foodSound.mp3');
    gameOverSound = loadSound('GameOver.mp3');
    explosion = loadSound('explosion.mp3');
}

function setup() {
    createCanvas(WIDTH, HEIGHT);
    newGame.setUpFood();
    
}



function draw() {

    $(document).ready(function() {

    $(".highScore").empty();
    $(".highScore").append("High Score : " + highScore);
    $(".score").empty();
    $(".score").append("score : " + newGame.score);


    });

    setup();
    if (newGame.player.cannibalism == false) {
    background (255, 255, 153);
    newGame.drawGame(); 
    gameOver(); } 
    
}

       
$(document).ready(function() {

$(".easy").click(function(){

    $(".Game-Over").css("visibility", "hidden");
    $(".welcome").css("visibility", "hidden");
    newGame = new Game(1);
    gameMusic.loop();
    startMusic.play();
    startMusic.setVolume(12);
});

$(".medium").click(function(){

    $(".Game-Over").css("visibility", "hidden");
    $(".welcome").css("visibility", "hidden");
    newGame = new Game(2);
    gameMusic.loop();
    startMusic.play();
    startMusic.setVolume(10);
});

$(".hard").click(function(){

    $(".Game-Over").css("visibility", "hidden");
    $(".welcome").css("visibility", "hidden");
    newGame = new Game(4);
    gameMusic.loop();
    startMusic.play();
    startMusic.setVolume(10);
});

$(".legend").click(function(){

    $(".Game-Over").css("visibility", "hidden");
    $(".welcome").css("visibility", "hidden");
    newGame = new Game(5);
    gameMusic.loop();
    startMusic.play();
    startMusic.setVolume(10);
});

$(".score").append("Score : " + newGame.score);
$(".highScore").append("High Score" + highScore);

});





