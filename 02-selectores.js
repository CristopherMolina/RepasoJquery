$(document).ready(function(){
    let varBoton = $('button').html();
    console.log(varBoton);
    
    // $('button').html("Cambiado desde JQuery");
    // $('.btn').html("Cambiado desde la clase");
    // $('#boton').html("Cambiado desde el id");
    $('#subcontenedor button').html("Cambiado desde subcontenedor");
    $('button:first').html("primer boton")
    $('button:last').html("ultimo boton")
});