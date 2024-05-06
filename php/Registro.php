<?php
include("conexion.php"); // Incluir el archivo de conexión a la base de datos

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Verificar si se ha enviado el formulario por POST

    // Obtener los datos del formulario
    $nombre = $_POST['nombre'];
    $Apaterno = $_POST['Apaterno'];
    $Amaterno = $_POST['Amaterno'];
    $correo = $_POST['correo'];
    $contrasena = $_POST['contrasena'];

    // Insertar los datos en la base de datos
    $consulta = "INSERT INTO signup(nombre, correo, contrasena, Apaterno, Amaterno) VALUES ('$nombre', '$correo', '$contrasena','$Apaterno','$Amaterno')";
    $resultado = mysqli_query($conex, $consulta);

    if ($resultado) {
        // Si la inserción fue exitosa, mostrar un mensaje
        echo "<script>alert('Te has registrado correctamente<')</script>";
    } else {
        // Si hubo un error durante la inserción, mostrar un mensaje de error
        echo "<script>alert('class='bad'>Ups, ha ocurrido un error'</script>)";
    }
}
?>