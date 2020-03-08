<?php

$usuario = $_POST['usuario'];
$pass = $_POST['pass'];
if($usuario === '' || $pass === '')
{
    echo json_encode('error');//Como el que usamos para recibir la información con js es fetch_API es necesario enviar la respuesta en formato json, es por eso que usamos el json_encode
}
else{
    echo json_encode('Correcto: <br>Usuario: ' . $usuario . '<br>Pass: '.$pass);
}

?>