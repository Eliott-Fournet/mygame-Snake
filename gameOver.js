

function gameOver() {

    $(document).ready(function() {

        let Over = newGame.GameOver;
    
        if (Over === true) {
            
            $(".Game-Over").css("visibility", "visible");
            
    
        }else {
    
            $(".Game-Over").css("visibility", "hidden");
    
        };
    
        $(".Game-Over").css("height", HEIGHT + 'px');
        $(".Game-Over").css("width", WIDTH + 'px');
    
      });

}
