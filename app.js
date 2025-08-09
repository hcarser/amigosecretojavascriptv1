// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Crear un array para almacenar los nombres
listAmigos= [];

//Capturar el valor del campo de entrada: Utilizar document.getElementById o document.querySelector para obtener el texto ingresado por el usuario. 

//Validar la entrada: Implementar una validación para asegurarse de que el campo no esté vacío. Si está vacío, mostrar un alert con un mensaje de error: "Por favor, inserte un nombre."

//Actualizar el array de amigos: Si el valor es válido, añadirlo al arreglo que almacena los nombre de amigos usando el método.push().

//Limpiar el campo de entrada: Después de añadir el nombre, restablecer el campo de texto a una cadena vacía.
function agregarAmigo() {
    const amigoInput = document.getElementById("amigo");
    const amigoNombre = amigoInput.value.trim();

    if (amigoNombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    listAmigos.push(amigoNombre);
    amigoInput.value = "";

    actualizarListaAmigos();
}   
//Actualizar la lista en el DOM: Crear una función que actualice la lista visible de amigos en la página web. Esta función debe recorrer el array y generar los elementos HTML necesarios para mostrar cada nombre en la lista.
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    listAmigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Escribe una función que seleccione de manera aleatoria uno de los nombres almacenados en el array amigos. Usa Math.random() y Math.floor() para obtener un índice aleatorio.

//Tareas específicas:

//Validar que haya amigos disponibles: Antes de sortear, comprobar si el array amigos no está vacío.

//Generar un índice aleatorio: Usar Math.random() y Math.floor() para seleccionar un índice aleatorio del arreglo.

//Obtener el nombre sorteado: Utilizar el índice aleatorio para acceder al nombre correspondiente en el arreglo.

//Mostrar el resultado: Actualizar el contenido del elemento de resultado utilizando document.getElementById()  e innerHTML para mostrar el amigo sorteado.

function sortearAmigo() {
    if (listAmigos.length === 0) {
        alert("No hay amigos para sortear. Por favor, añade al menos un amigo.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * listAmigos.length);
    const amigoSorteado = listAmigos[indiceAleatorio];

    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `El amigo sorteado es: <strong>${amigoSorteado}</strong>`;
}
//Asignar la función al botón: Asegurarse de que el botón "Sortear Amigo" llame a la función sortearAmigo() cuando se haga clic en él. Esto se puede hacer utilizando el atributo onclick en el HTML o añadiendo un event listener en JavaScript.
document.getElementById("sortear").addEventListener("click", sortearAmigo);
