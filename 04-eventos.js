$(document).ready(function() {
    $('#boton').click(function (e) { 
        e.preventDefault();
        $('img').attr('src','logo2.jpg');
    });

    $('#subcontenedor button:nth-child(1)').click(function (e) { 
        e.preventDefault();
        $('img').attr('width','200px')
    });

    $('#subcontenedor button:nth-child(2)').click(function (e) { 
        e.preventDefault();
        //asi la imagen se mueve mas cada vez que se hace click
        let margen = $('img').css('margin-left');
        margen = parseInt(margen.replace('px',''));
        margen = margen + 30;
        $('img').css('margin-left', margen+'px');
    });

    $('#subcontenedor button:nth-child(3)').click(function (e) { 
        e.preventDefault();
        $('img').toggleClass('d-none');
    });

    let textoUI=$('#texto');
    textoUI.keyup(function (e) { 
        $('#saludo').html("Hola " + textoUI.val());
    });

    $('form').submit(function (e) { 
        e.preventDefault();
    });
});