//usar index4.html
$(document).ready(function(){
    $('.slider').bxSlider();
    $('.bxslider').bxSlider({
        auto:true,
        speed:100,
        autoControls:true,
        stopAutoOnClick:true,
        pager:true,
        pagerType:'full',//short
        slideWidth:500,
        mode:'horizontal',
        //randomStart:true //cambiar imagen de forma aleatoria
        infiniteLoop:true //en false no hace bucle
    });
});