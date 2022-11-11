//usar index8.html

$(document).ready(function () {
    $('form').submit(function (e) { 
        e.preventDefault();
        let nombre = $('#nombre').val();
        let puesto = $('#puesto').val();
        $.post("http://localhost/convertirPOST.php", {'nombre':nombre, 'puesto':puesto},
            function (data, textStatus, jqXHR) {
                $('#res').parent().removeClass('d-none');
                $('#res').html(data);
            }
        ).done(function () {
            $('#estado').html("exito");
            $('#estado').addClass("alert-success");
            $('#estado').removeClass("d-none");
        }).fail(function () {
            $('#estado').html("fallo");
            $('#estado').addClass("alert-danger");
            $('#estado').removeClass("d-none");
        }).always(function () { 
            console.log("finalizo");
        });
    });
});