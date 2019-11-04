$(document).ready(function(){
  
    $(window).scroll(function(){
        var windowWidth = $(window).width();
        if(windowWidth > 800) {
            var scroll = $(window).scrollTop();
                $('header .text').css({
                    'transform': 'translate(0px, ' + scroll / 2 + '%)'
                    //googlear esto x las dudas . translate 0px porque no se mueve de costado
                    //el segundo valor es dinamico (camb constante en scroll(var) ) x eso %
                });
            
            $('.acerca-de article').css({
                    'transform': 'translate(0px, -' + scroll / 4 + '%)'
            });
        }
    });
    
    $(window).resize(function(){
        var windowWidth =  $(window).width();
        if(windowWidth < 800){
            $('.acerca-de article').css({
                    'transform': 'translate(0px, 0px)'
            });
        }
    });
}); 