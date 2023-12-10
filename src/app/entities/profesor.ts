import { Asignatura } from "./asignatura";

export class Profesor {
  id: number;
  nombre: string;
  asignaturas: Asignatura[];

  constructor(nombre: string, id?: number, asignaturas?: Asignatura[]) {
    this.nombre = nombre;
    this.id = id? id : 0;
    this.asignaturas = asignaturas? asignaturas : [];
  }
}
