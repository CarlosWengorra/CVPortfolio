<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST['nombre'];
    $telefono = $_POST['telefono'];
    $correo = $_POST['correo'];
    $tema = $_POST['tema'];
    $mensaje = $_POST['mensaje'];
    
    $destinatario = 'carloswengorra@outlook.com'; // Cambia esto con tu dirección de correo electrónico
    
    $asunto = 'Nuevo mensaje de contacto desde tu sitio web';
    
    $contenido = "Nombre: $nombre\n";
    $contenido .= "Teléfono: $telefono\n";
    $contenido .= "Correo electrónico: $correo\n";
    $contenido .= "Tema: $tema\n\n";
    $contenido .= "Mensaje:\n$mensaje\n";
    
    $encabezados = 'From: ' . $correo . "\r\n" .
        'Reply-To: ' . $correo . "\r\n" .
        'X-Mailer: PHP/' . phpversion();
    
    mail($destinatario, $asunto, $contenido, $encabezados);
    
    // Redireccionar de vuelta a la página de contacto
    header('Location: ' . $_SERVER['HTTP_REFERER']);
    exit(); // Importante: asegúrate de salir del script después de la redirección

} else {
    // Si alguien intenta acceder directamente a este archivo, redireccionar a la página de contacto
    header('Location: contacto.html');
    exit(); // Asegúrate de salir del script después de la redirección
?>
