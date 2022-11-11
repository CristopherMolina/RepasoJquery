//usar index2.html

$(document).ready(function(){
    // $('.chosen-select').chosen({no_results_text:"Ups no hay anda que diga: "});//mostrar si no encuentra resultados

    // $('.chosen-select').chosen({disable_search_threshold:6});// deshabilitar buscador si son menos de 6 elementos

    //$('.chosen-select').chosen({max_selected_options:3});//solo para multiseleccion, no se puede seleccionar mas de 3 elementos

    //$('.chosen-select').chosen({rtl:true});//mueve todo a la derecha

    $('.chosen-select').chosen({rtl:true,max_selected_options:3});

    $('.chosen-select').chosen().change(function(){ 
        alert($(this).val());
    });
});