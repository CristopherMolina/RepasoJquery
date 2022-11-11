$(document).ready(function() {
    $('#boton').addClass('btn-danger');
    $('#boton').removeClass('btn-primary');

    $('#subcontenedor').append('<button type="button" class="btn btn-danger" id="boton">Agregado con append</button>');
    $('#subcontenedor').prepend('<button type="button" class="btn btn-danger" id="boton">Agregado con prepend</button>');

    $('#boton').css({'color':'blue','background-color':'yellow'});

    //$('#subcontenedor').remove();
    //$('#subconyenedor').hide(); //agrega la clase display:none
    $('img').attr({'src':'logo2.jpg','width':'300px'});
});