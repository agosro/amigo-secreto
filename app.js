// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    
    let input = document.getElementById("amigo").value;
    let nombreAmigo = input.trim(); // Eliminar espacios en blanco al inicio y al final

    if (nombreAmigo === "") {
        alert("Por favor, ingresa un nombre.");     
    } else {
        amigos.push(nombreAmigo); // Añadir el nombre del amigo a la lista
        document.getElementById("amigo").value = ""; // Limpiar el campo de entrada
        mostrarAmigos(); // Mostrar la lista actualizada de amigos
    }
}

function mostrarAmigos() {
    let lista = document.getElementById("listaAmigos"); // Obtener el elemento de la lista de amigos
    lista.innerHTML = ""; // Limpiar la lista antes de mostrar los amigos

    amigos.forEach(function(amigo) {
        let li = document.createElement("li"); // Crear un nuevo elemento de lista
        li.textContent = amigo; // Asignar el nombre del amigo al contenido del elemento
        lista.appendChild(li); //
    });
}


function sortearAmigo() {
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpiar el resultado anterior

    if (amigos.length === 0) {
        alert("No hay amigos para sortear. Por favor, añade algunos amigos primero.");
    } else {
        let amigoSorteado = Math.floor(Math.random() * amigos.length); // Generar un número aleatorio entre 0 y la longitud de la lista de amigos
        let amigoSeleccionado = amigos[amigoSorteado]; // Seleccionar un amigo al azar de la lista

        let li = document.createElement("li"); // Crear un nuevo elemento de lista para mostrar el resultado
        li.textContent = `Tu amigo secreto es: ${amigoSeleccionado}`; // Asignar el nombre del amigo seleccionado al contenido del elemento
        resultado.appendChild(li); // Añadir el elemento de lista al resultado

        amigos = [];
        mostrarAmigos(); // Vaciar la lista de amigos después del sorteo

    }
}