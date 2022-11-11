<?php
header('Access-Control-Allow-Origin: *');
$servidor='localhost';
$usuario='root';
$pass='cristopher';
$bd='jquery';

$mysqli=new mysqli($servidor,$usuario,$pass,$bd);
if($_REQUEST["accion"]=="leer"){
    $arreglo=array();

    $consulta="select id,nombre,puesto,edad from empleados";
    
    if($result=$mysqli->query($consulta)){
        while($row = $result->fetch_array(MYSQLI_ASSOC)){
            $arreglo[]=$row;
        }
        echo json_encode($arreglo);
    }
$result->close();
}
elseif ($_REQUEST["accion"]=="insertar") {
    $sql="insert into empleados (nombre,puesto,edad) values ('".$_POST["nombre"]."','".$_POST["puesto"]."','".$_POST["edad"]."')";
    if($mysqli->query($sql)===TRUE){
        echo "1";
    }else{
        echo "0";
    }
}
elseif ($_REQUEST["accion"]=="editar") {
    $sql="update empleados set nombre='".$_POST["nombre"]."',puesto='".$_POST["puesto"]."',edad='".$_POST["edad"]."' where id='".$_POST["id"]."'" ;
    if($mysqli->query($sql)===TRUE){
        echo "1";
    }else{
        echo "0";
    }
}
elseif ($_REQUEST["accion"]=="borrar") {
    $sql="delete from empleados where id='".$_POST["id"]."'" ;
    if($mysqli->query($sql)===TRUE){
        echo "1";
    }else{
        echo "0";
    }
}

$mysqli->close();

?>