//usar index3.html
$(document).ready(function(){
    $('#fecha').daterangepicker({
        locale:{
            format: "YYYY-MM-DD hh:mm:ss"
        },
        timePicker: true,
        startDate: moment().startOf('hour'),
        endDate: moment().startOf('hour').add(48,'hour')
    },function(inicio,fin){
        console.log(inicio.format('YYYY-MM-DD hh:mm:ss')+" - "+fin.format('YYYY-MM-DD hh:mm:ss'));
    });

    //singleDatePicker: calendario con una fecha
    $('#fecha2').daterangepicker({
        locale:{
            format: "YYYY-MM-DD hh:mm:ss"
        },
        singleDatePicker:true,
        showDropdowns:true,
        timePicker: true,
        minYear:2000,
        maxYear:parseInt(moment().format('YYYY')),
        startDate: moment().startOf('hour'),
        endDate: moment().startOf('hour').add(48,'hour')
    },function(inicio,fin){
        console.log(inicio.format('YYYY-MM-DD hh:mm:ss')+" - "+fin.format('YYYY-MM-DD hh:mm:ss'));
    });
});