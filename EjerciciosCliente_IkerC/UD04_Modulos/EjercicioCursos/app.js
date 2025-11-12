import Estudiante from "./estudiante.js";
import Instituto from "./instituto.js";
import Curso from "./curso.js";

const instituto = new Instituto("CIFP ELORRIETA ERREKAMARI");

const estudiante1 = new Estudiante("Iker", 21);
const estudiante2 = new Estudiante("Mikel", 22);
const estudiante3 = new Estudiante("Egoitz", 20);

const cursoJS = new Curso("JavaScript", 2);
const cursoCSS = new Curso("CSS", 3);

// Agregar cursos al instituto
instituto.agregarCurso(cursoJS);
instituto.agregarCurso(cursoCSS);

// Inscribir estudiantes en los cursos
instituto.inscribirEstudianteEnCurso(estudiante1, cursoJS);
instituto.inscribirEstudianteEnCurso(estudiante2, cursoJS);
instituto.inscribirEstudianteEnCurso(estudiante3, cursoJS);
instituto.inscribirEstudianteEnCurso(estudiante1, cursoCSS);

// Mostrar la lista de estudiantes y sus cursos
instituto.mostrarEstudiantes();

