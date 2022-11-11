$(document).ready(function() {
    $('#subcontenedor button:nth-child(4)').click(function (e) { 
        e.preventDefault();
        $('img').hide('slow');
    });

    $('#subcontenedor button:nth-child(5)').click(function (e) { 
        e.preventDefault();
        $('img').show('fast');
    });

    $('#subcontenedor button:nth-child(6)').click(function (e) { 
        e.preventDefault();
        $('img').toggle(300);//milisegundos
    });

    $('#subcontenedor button:nth-child(7)').click(function (e) { 
        e.preventDefault();
        $('img').fadeIn(300);
    });

    $('#subcontenedor button:nth-child(8)').click(function (e) { 
        e.preventDefault();
        $('img').fadeOut(300);
    });

    $('#subcontenedor button:nth-child(9)').click(function (e) { 
        e.preventDefault();
        $('img').slideDown(300);
    });

    $('#subcontenedor button:nth-child(10)').click(function (e) { 
        e.preventDefault();
        $('img').slideUp(300);
    });

    $('#subcontenedor button:nth-child(11)').click(function (e) { 
        e.preventDefault();
        $('img').slideToggle(300);
    });

    //Animate
    $('#subcontenedor button:nth-child(12)').click(function (e) { 
        e.preventDefault();
        $('img').animate({'margin-left':'+=100px', 'opacity':'0.5', 'width':'150px'},1000,
        function(){
            $('img').animate({'margin-left':'-=100px', 'opacity':'1', 'width':'200px'},2000)
        })//+= para aumentar el mismo valor, 1 segundo de duracion
    });

    $('#subir').click(function (e) { 
        e.preventDefault();
        $('html, body').animate({scrollTop:0},1000);
    });

    $('#bajar').click(function (e) { 
        e.preventDefault();
        $('html, body').animate({scrollTop:$(document).height()-$(window).height()},1000);
    });
});