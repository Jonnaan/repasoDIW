import Tarea from './Tarea.js';

const botonAgregar = document.getElementById('boton-agregar');
const listaTareas = document.getElementById('lista');
const textoTarea = document.getElementById('tareaInput');

const tareas = [];
let siguienteId = 1;
let tareaDataObj = null;
let filtroActual = "todas"; // "todas", "pendientes", "completadas"

// Cargar tareas al iniciar
document.addEventListener('DOMContentLoaded', () => {
  const storedTareas = JSON.parse(localStorage.getItem("tareas")) || [];
  storedTareas.forEach((tareaData) => {
    const tarea = Tarea.fromJSON(tareaData);
    tareas.push(tarea);
  });

  if (tareas.length > 0) {
    siguienteId = Math.max(...tareas.map(t => t.id)) + 1;
  }

  renderTareas(); // 🔥 Se renderizan según filtro
});

// Agregar nueva tarea
botonAgregar.addEventListener('click', () => {
  const texto = textoTarea.value.trim();
  if (texto === '') return;

  const nuevaTarea = new Tarea(siguienteId++, texto);
  tareas.push(nuevaTarea);

  textoTarea.value = '';
  saveTareas(nuevaTarea);
  renderTareas();
});

// Renderizar tareas según filtro
function renderTareas() {
  listaTareas.innerHTML = ''; // Limpiar lista antes de mostrar
  const tareasFiltradas = filtrarTareas();

  tareasFiltradas.forEach((tarea) => {
    const div = agregarDiv(tarea);
    listaTareas.appendChild(div);
  });
}

// Filtrar tareas según el estado actual
function filtrarTareas() {
  if (filtroActual === "pendientes") {
    return tareas.filter((t) => !t.getCompletada());
  } else if (filtroActual === "completadas") {
    return tareas.filter((t) => t.getCompletada());
  }
  return tareas; // "todas"
}

// Crear div de tarea
function agregarDiv(nuevaTarea) {
  const h4 = document.createElement('h4');
  h4.textContent = `${nuevaTarea.getId()} - ${nuevaTarea.getTexto()} - ${(nuevaTarea.getCompletada() ? 'Completada' : 'Pendiente')}`;

  const botonEliminar = document.createElement('button');
  botonEliminar.textContent = 'Eliminar';
  botonEliminar.addEventListener('click', () => {
    nuevaTarea.eliminar(tareas);
    updateLocalStorage();
    renderTareas();
  });

  const botonEditar = document.createElement('button');
  botonEditar.textContent = 'Editar';
  botonEditar.addEventListener('click', () => {
    nuevaTarea.editar();
    updateLocalStorage();
    renderTareas();
  });

  const botonCompletar = document.createElement('button');
  botonCompletar.textContent = 'Completar tarea';
  botonCompletar.disabled = nuevaTarea.getCompletada();
  botonCompletar.addEventListener('click', () => {
    if (!nuevaTarea.getCompletada()) {
      nuevaTarea.marcarCompletada();
      updateLocalStorage();
      renderTareas();
    }
  });

  const div = document.createElement('div');
  div.appendChild(h4);
  div.appendChild(botonEliminar);
  div.appendChild(botonEditar);
  div.appendChild(botonCompletar);

  if (nuevaTarea.getCompletada()) {
    div.style.backgroundColor = '#d4edda';
  }

  return div;
}

// Evitar submit con Enter
textoTarea.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') event.preventDefault();
});

// Guardar nueva tarea
function saveTareas(tarea) {
  const storedTareas = JSON.parse(localStorage.getItem("tareas")) || [];
  storedTareas.push(tarea.toJSON());
  localStorage.setItem("tareas", JSON.stringify(storedTareas));

  sessionStorage.setItem("currentTarea", JSON.stringify(tarea.toJSON()));
  tareaDataObj = tarea;
  return true;
}

// Actualizar localStorage
function updateLocalStorage() {
  const tareasToStore = tareas.map((t) => t.toJSON());
  localStorage.setItem("tareas", JSON.stringify(tareasToStore));
}

// Filtrado dinámico
document.getElementById("filtro-todas").addEventListener("click", () => {
  filtroActual = "todas";
  renderTareas();
});

document.getElementById("filtro-pendientes").addEventListener("click", () => {
  filtroActual = "pendientes";
  renderTareas();
});

document.getElementById("filtro-completadas").addEventListener("click", () => {
  filtroActual = "completadas";
  renderTareas();
});
