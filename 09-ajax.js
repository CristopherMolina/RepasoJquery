//usar index5.html

$(document).ready(function () {
    $('#leer').click(function (e) { 
        e.preventDefault();
        $.get("archivo.txt",function(data,textStatus,jqXHR){
            console.log(data);
            console.log(textStatus);
            console.log(jqXHR);
        });
    });

    $("#leerEmpleado").click(function (e) { 
        e.preventDefault();
        $.get("empleado.json",
            function (data) {
                $("#datosEmpleado").html(`
                Nombre: ${data.nombre}<br>
                Puesto: ${data.puesto}<br>
                Edad: ${data.edad}
                `);
        });
    });

    $("#leerArregloEmpleado").click(function (e) { 
        e.preventDefault();
        $("#listaEmpleados").html('');
        $.get("empleados.json",function(data){
            $.each(data, function (index, item) { 
                $("#listaEmpleados").html($("#listaEmpleados").html()+`
                <li>${item.nombre} -- ${item.puesto} -- ${item.edad}</li>`);
            });
        });
    });

    $("#leerGetJSON").click(function (e) { 
        e.preventDefault();
        $.get("empleados.txt", function(data){
            //data = JSON.parse(data);//para convertir string a json
            console.log(data);
        });

        $.getJSON("empleados.txt", function(data){
            console.log(data);
        });

        $.getJSON("masEmpleados.json", function(data){
            console.log(data.temporales);
            $("#listaEmpleados").html('');
            $.each(data.temporales, function (index, item) { 
                $("#listaEmpleados").html($("#listaEmpleados").html()+`
                <li>${item.nombre} -- ${item.puesto} -- ${item.edad}</li>`);
            });
        });
    });

    //filtrar ajax
    let empleados;
    $.getJSON("masEmpleados.json", function(data){
        empleados = data.empleados;
    });
    $('#nombre').keyup(function (e) { 
        let nombre = $(this).val();
        $("#listaEmpleados").html('');
        $.each(empleados, function (index, item) { 
            if(item.nombre.toLowerCase().indexOf(nombre.toLowerCase()) !== -1){
                $("#listaEmpleados").html($("#listaEmpleados").html()+`
                <li>${item.nombre} -- ${item.puesto} -- ${item.edad}</li>
                `);
            }
        });
    });
});