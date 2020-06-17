console.log("hello world ");

let newGame = new Game(4);


function preload() {

}

function setup() {
    createCanvas(WIDTH, HEIGHT);
    newGame.setUpFood();
}

function draw() {

    $(document).ready(function() {

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
    newGame = new Game(1);
});

$(".medium").click(function(){

    $(".Game-Over").css("visibility", "hidden");
    newGame = new Game(2);
});

$(".hard").click(function(){

    $(".Game-Over").css("visibility", "hidden");
    newGame = new Game(4);
});

$(".legend").click(function(){

    $(".Game-Over").css("visibility", "hidden");
    newGame = new Game(5);
});

$(".score").append("Score : " + newGame.score);

});





