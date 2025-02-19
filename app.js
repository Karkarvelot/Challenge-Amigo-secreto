
// Arreglo donde se almacenarán los nombres de los amigos ingresados
const obtenerAmigo = [];

/**
 * Función para agregar un nuevo amigo a la lista.
 * - Valida que el input no esté vacío.
 * - Verifica si el nombre ya existe para evitar duplicados.
 * - Actualiza la lista de amigos en el HTML.
 * - Limpia el campo de entrada y el resultado anterior.
 */
function agregarAmigo() {
  // Obtiene el valor del input, eliminando espacios al inicio y al final
  const nuevoAmigo = document.getElementById('amigo').value.trim();

  if (nuevoAmigo !== '') {
    // Verifica si el amigo ya está en la lista y muestra una alerta si es así
    if (obtenerAmigo.includes(nuevoAmigo)) {
      alert('Ese amigo ya está en la lista.');
      return; // Sale de la función para evitar agregarlo nuevamente
    }

    // Agrega el nuevo amigo al arreglo
    obtenerAmigo.push(nuevoAmigo);

    // Muestra la lista actualizada en el HTML
    mostrarLista();

    // Limpia el campo de entrada después de agregar el amigo
    document.getElementById('amigo').value = '';

    // Limpia el mensaje de resultado anterior (si existía)
    asignarTextoElemento('#resultado', '');

  } else {
    // Alerta si el usuario intenta agregar un nombre vacío
    alert('Ingrese un nombre, por favor.');
  }
}

/**
 * Función para mostrar la lista de amigos en el HTML.
 * - Limpia la lista anterior para evitar duplicados visuales.
 * - Recorre el arreglo `obtenerAmigo` y crea un <li> para cada amigo.
 * - Agrega cada <li> a la lista desordenada (<ul>) en el HTML.
 */
function mostrarLista() {
  // Obtiene el elemento <ul> donde se mostrará la lista de amigos
  const lista = document.getElementById('listaAmigos');

  // Limpia la lista antes de renderizarla nuevamente
  lista.innerHTML = '';

  // Recorre el arreglo de amigos y agrega cada uno como un nuevo <li>
  for (let i = 0; i < obtenerAmigo.length; i++) {
    const nuevoElemento = document.createElement('li'); // Crea un nuevo <li>
    nuevoElemento.textContent = obtenerAmigo[i];        // Asigna el nombre del amigo como texto
    lista.appendChild(nuevoElemento);                   // Agrega el <li> al <ul>
  }
}

/**
 * Función para sortear un amigo al azar.
 * - Verifica que haya al menos un amigo en la lista.
 * - Genera un índice aleatorio válido.
 * - Muestra el nombre del amigo sorteado en el HTML.
 */

function sortearAmigo() {
  // Verifica que la lista no esté vacía antes de realizar el sorteo
  if (obtenerAmigo.length === 0) {
    alert('Agrega al menos un amigo para sortear.');
  } else {
    // Genera un número aleatorio entre 0 y la longitud del arreglo - 1
    const sorteoAmigo = Math.floor(Math.random() * obtenerAmigo.length);

    // Muestra el nombre del amigo sorteado en el elemento con id "resultado"
    asignarTextoElemento('#resultado', `🎉 El ganador es ${obtenerAmigo[sorteoAmigo]} 🎉`);

    obtenerAmigo.splice(sorteoAmigo, 1);
    mostrarLista();
  }
}
function asignarTextoElemento(elemento, texto) {
    // Selecciona el elemento y actualiza su contenido de texto
    document.querySelector(elemento).textContent = texto;
  }