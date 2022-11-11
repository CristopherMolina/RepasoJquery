//usar index7.html

$(document).ready(function () {
    $('#convertir').click(function (e) { 
        e.preventDefault();
        let operacion = $('#operacion').val();//valores: may,min y vacio
        let texto = $('#texto').val();
        $.get("http://localhost/convertir.php",{'operacion':operacion, 'texto':texto},
            function (data) {
                console.log(data);
                $('#listaEmpleados').html(data);
            }
        );
    });
});