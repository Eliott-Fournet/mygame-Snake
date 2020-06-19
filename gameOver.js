

function gameOver() {

    $(document).ready(function() {

        let Over = newGame.GameOver;
    
        if (Over === true) {
            
            $(".Game-Over").css("visibility", "visible");
            menuMusic.loop();
            gameMusic.stop();
            menuMusic.setVolume(0.5);
            gameOverSound.play();
            gameOverSound.setVolume(5);
            explosion.play();
            explosion.setVolume(0.6);
            
    
        }else {
    
            $(".Game-Over").css("visibility", "hidden");
            menuMusic.stop();
    
        };
    
        $(".Game-Over").css("height", HEIGHT + 'px');
        $(".Game-Over").css("width", WIDTH + 'px');
        $(".welcome").css("height", HEIGHT + 'px');
        $(".welcome").css("width", WIDTH + 'px');
        $(".button-container").css("width", WIDTH + 'px');

      });

}
