let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contrasena = document.getElementById('contrasena');

const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generar() {
    let numeroDigitado = parseInt(cantidad.value);

    if (numeroDigitado < 8) {
        alert("La cantidad de caracteres debe ser mayor a 8");
        return; // Evitar que se genere la contraseña si es menor a 8
    }

    let password = '';
    for (let i = 0; i < numeroDigitado; i++) {
        // Obtener un índice aleatorio en la longitud de cadenaCaracteres
        let indiceAleatorio = Math.floor(Math.random() * cadenaCaracteres.length);
        let caracterAleatorio = cadenaCaracteres[indiceAleatorio];

        password += caracterAleatorio;
    }

    console.log('password generada: ' + password);
    contrasena.value = password; // Asignar la contraseña generada al campo de texto
} 









