import Tarea from './Tarea.js';

const botonAgregar = document.getElementById('boton-agregar');
const listaTareas = document.getElementById('lista');
const textoTarea = document.getElementById('tareaInput');

const tareas = [];
let siguienteId = 1;
let tareaDataObj = null;

botonAgregar.addEventListener('click', () => {
    const texto = textoTarea.value.trim();

    // Evitar tareas vacías
    if (texto === '') return;

    const nuevaTarea = new Tarea(siguienteId++, texto);
    tareas.push(nuevaTarea);

    const div = agregarDiv(nuevaTarea);
    listaTareas.appendChild(div);

    // Limpiar input
    textoTarea.value = '';

    // Guardar en sessionStorage y localStorage
    const formData = {
        id: nuevaTarea.getId(),
        texto: nuevaTarea.getTexto(),
        completada: nuevaTarea.getCompletada()
    };

    saveTareas(formData);

});

// Función para crear y devolver un div con la tarea y sus botones
function agregarDiv(nuevaTarea) {
    const h4 = document.createElement('h4');
    h4.textContent = nuevaTarea.getId() + ' - ' + nuevaTarea.getTexto() + ' - ' + (nuevaTarea.getCompletada() ? 'Completada' : 'Pendiente');

    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';

    // Evento para eliminar la tarea
    botonEliminar.addEventListener('click', () => {
        nuevaTarea.eliminar(tareas);
        listaTareas.removeChild(h4.parentElement);
        console.log(tareas);
    });

    const botonEditar = document.createElement('button');
    botonEditar.textContent = 'Editar';

    // Evento para editar la tarea
    botonEditar.addEventListener('click', () => {
        nuevaTarea.editar();
        h4.textContent = nuevaTarea.getId() + ' - ' + nuevaTarea.getTexto();
        console.log(tareas);
    });

    const botonCompletar = document.createElement('button');
    botonCompletar.textContent = 'Completar tarea';

    // Evento para marcar como completada
    botonCompletar.addEventListener('click', () => {
        if (!nuevaTarea.getCompletada()) {
            nuevaTarea.marcarCompletada();
            div.style.backgroundColor = '#d4edda';
            botonCompletar.disabled = true;
            h4.textContent = nuevaTarea.getId() + ' - ' + nuevaTarea.getTexto() + ' - Completada';

            console.log(tareas);
        }

    });

    const div = document.createElement('div');
    div.appendChild(h4);
    div.appendChild(botonEliminar);
    div.appendChild(botonEditar);
    div.appendChild(botonCompletar);

    return div;
}

// Evita que se ejecute el submit o acción por defecto (al presionar Enter)
textoTarea.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
    }
});

function saveTareas(formData) {
  const newTarea = new Tarea(
    formData.id,
    formData.texto,
    formData.completada
  );

  // Recuperar tareas existentes
  const storedTareas = JSON.parse(localStorage.getItem("tareas")) || [];
  const existingTareas = storedTareas.map((t) => Tarea.fromJSON(t));

  // Verificar si ya existe
  const tareaExists = existingTareas.some(
    (t) => t.getId() === newTarea.getId()
  );

  // Guardar en sessionStorage
  sessionStorage.setItem("currentTarea", JSON.stringify(newTarea.toJSON()));
  tareaDataObj = newTarea;

  // Guardar en localStorage
  existingTareas.push(newTarea);
  const tareasToStore = existingTareas.map((t) => t.toJSON()); // Convertir a JSON antes de guardar
  localStorage.setItem("tareas", JSON.stringify(tareasToStore));

  return true;
}

document.addEventListener('DOMContentLoaded', () => {
  // Cargar tareas desde localStorage al iniciar la página
  const storedTareas = JSON.parse(localStorage.getItem("tareas")) || [];
  storedTareas.forEach((tareaData) => {
    const tarea = Tarea.fromJSON(tareaData);
    tareas.push(tarea);
    const div = agregarDiv(tarea);
    listaTareas.appendChild(div);
  });
});