
    // Obtener referencia al botón borrar
const botonBorrar = document.getElementById("botonBorrar");

// Lista de cuentas con sus respectivos datos
const cuentas = [
    ["dato1", "dato2", "dato3", "dato4"],
    ["dato1", "dato2", "dato3", "dato4"],
    ["dato1", "dato2", "dato3", "dato4"],
    ["dato1", "dato2", "dato3", "dato4"],
    ["dato1", "dato2", "dato3", "dato4"]
];

// Función que elimina los datos de las tarjetas
const eliminarDatosTarjetas = () => {
  // Obtener todas las tarjetas
    const cards = document.querySelectorAll(".card, .data");

  // Eliminar contenido de cada tarjeta
    cards.forEach(card => {
    card.innerHTML = "";
    });
};

// Función que redirige a la página principal
const irInicio = () => {
    window.open("index.html");
};

// Función que borra la cuenta y llama a las funciones de eliminación de datos y redirección a la página principal
const borrarCuenta = () => {
  // Preguntar al usuario si está seguro de que quiere eliminar su cuenta
    if (confirm("¿Estás seguro de que quieres eliminar tu cuenta? Esta acción no se puede deshacer.")) {
    // Eliminar la última cuenta de la lista
    cuentas.pop();
    // Imprimir la lista actualizada de cuentas en la consola
    console.log(cuentas);
    // Eliminar los datos de las tarjetas
    eliminarDatosTarjetas();
    // Redirigir a la página principal
    irInicio();
    }
};

// Agregar un evento de clic al botón de borrar
botonBorrar.addEventListener("click", borrarCuenta);

// Imprimir la lista inicial de cuentas en la consola
console.log(cuentas);
