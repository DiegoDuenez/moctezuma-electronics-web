<?php

$nombre = test_input($_POST['nombre']);
$correo = test_input($_POST['correo']);
$asunto = test_input($_POST['asunto']);
$mensaje = test_input($_POST['mensaje']);



if (empty($nombre) ||  empty($correo)  || empty($mensaje) || empty($asunto)) {
    return print(json_encode('empty'));
} else {
    $para = "<soporte@mzma-electronics.com>, <ventas@mzma-electronics.com>";
    // $titulo = $nombre . ' quiere ponerse en contacto.';
    $titulo = ucfirst($asunto);
    $mensaje = '
    <html>
    <head>
        <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
        <title></title>
    </head>
    <body>
        <h3>Nombre completo:</h3>
        <p>' . $nombre . '</p>
        <h3>Correo:</h3>
        <p> ' . $correo .'</p>
        <h3>Mensaje:</h3>
        <p>' . ucfirst($mensaje)  . '</p>
    </body>
    </html>';

    $cabeceras  = 'MIME-Version: 1.0' . "\r\n";
    $cabeceras .= 'Content-type: text/html; charset=UTF-8' . "\r\n";

    $cabeceras .= 'Para: <soporte@mzma-electronics.com>, <ventas@mzma-electronics.com>' . "\r\n";
    $cabeceras .= 'From: ' . $nombre . "\r\n";

    $sent = mail($para, utf8_decode($titulo), utf8_decode($mensaje), $cabeceras);
    //echo json_encode("correo enviado");
   // echo "<script>window.location.href='../index.php'</script>";

    // var_dump($jsonResponse);
    if ($jsonResponse->success === true) {

        $sent = mail($para, utf8_decode($titulo), utf8_decode($mensaje), $cabeceras);

        if ($sent) {
            echo json_encode('success');
        } else {
            echo json_encode('servidor');
        }
    } else {
        echo json_encode('captcha');
    }
}


function test_input($field)
{
    $field = trim($field);
    $field = stripslashes($field);
    $field = htmlspecialchars($field);
    return $field;
}


























/*
// Ingresa tu clave secreta.....
define("RECAPTCHA_V2_SECRET_KEY", '6LcTBLMcAAAAAGWa46fE8FgBbbn2D4wTl1jLcIrX');

$token = $_POST['token'];
$action = $_POST['action'];

// call curl to POST request
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "https://www.google.com/recaptcha/api/siteverify");
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query(array('secret' => RECAPTCHA_V2_SECRET_KEY, 'response' => $token)));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);
$arrResponse = json_decode($response, true);

// verificar la respuesta
if ($arrResponse["success"] == '1' && $arrResponse["action"] == $action && $arrResponse["score"] >= 0.5) {
    // Si entra aqui, es un humano, puedes procesar el formulario
    echo "ok!, eres un humano";
} else {
    // Si entra aqui, es un robot....
    echo "Lo siento, parece que eres un Robot";
}
*/