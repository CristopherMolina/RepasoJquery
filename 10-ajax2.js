//usar index6.html

$(document).ready(function () {
    $('#ajax').click(function (e) { 
        e.preventDefault();
        $.ajax({
            url:'masEmpleados.json',
            type:'get',
            dataType:'json',
            success:function (data) {
                console.log(data);
                $('#listaEmpleados').html('');
                $.each(data.empleados, function (index, item) { 
                    $('#listaEmpleados').html($('#listaEmpleados').html()+`<li>${item.nombre}</li>
                    `);
                });
            },
            error:function (xhr,status,error) {
                console.log(xhr);
                console.log(status);
                console.log(error);
            }
        });
    });
});