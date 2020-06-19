

function gameOver() {

    $(document).ready(function() {

        let Over = newGame.GameOver;
    
        if (Over === true) {
            
            $(".Game-Over").css("visibility", "visible");
            menuMusic.loop();
            gameMusic.stop();
            
    
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
