import { Estudiante } from "./estudiante";

export class Asignatura {
    nombre: string;
    estudiantes: Estudiante[];

    constructor(nombre: string, estudiantes: Estudiante[]) {
        this.nombre = nombre;
        this.estudiantes = estudiantes;
    }
}