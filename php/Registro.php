<?php
include("conexion.php"); // Incluir el archivo de conexión a la base de datos

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Verificar si se ha enviado el formulario por POST

    // Obtener los datos del formulario
    $nombre = $_POST['nombre'];
    $correo = $_POST['correo'];
    $contrasena = $_POST['contrasena'];

    // Insertar los datos en la base de datos
    $consulta = "INSERT INTO signup(nombre, correo, contrasena) VALUES ('$nombre', '$correo', '$contrasena')";
    $resultado = mysqli_query($conex, $consulta);

    if ($resultado) {
        // Si la inserción fue exitosa, mostrar un mensaje
        echo "<h3>Te has registrado correctamente</h3>";
    } else {
        // Si hubo un error durante la inserción, mostrar un mensaje de error
        echo "<h3 class='bad'>Ups, ha ocurrido un error</h3>";
    }
}
?>