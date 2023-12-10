import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Profesor } from '../../entities/profesor';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { Estudiante } from '../../entities/estudiante';
import { Asignatura } from '../../entities/asignatura';

@Component({
  selector: 'app-detalle-profesor',
  standalone: true,
  imports: [ HttpClientModule, RouterModule, RouterLink],
  templateUrl: './detalle-profesor.component.html',
  styleUrl: './detalle-profesor.component.css'
})
export class DetalleProfesorComponent implements OnInit{
    
  http = inject(HttpClient);
  route = inject(ActivatedRoute);
  profesores:Profesor[] = [];
  profesor:Profesor = new Profesor('', 0, []);

  getProfesorConEstudiantes(): Observable<any> {
    return this.http.get('http://localhost:3000/profesor/estudiantes');
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.getProfesorConEstudiantes().subscribe((data) => {
        for (let profesorNombre in data){
            let asignaturasData = data[profesorNombre];
            let asignaturas: Asignatura[] = [];
            for (let asignaturaNombre in asignaturasData) {
                let estudiantes = asignaturasData[asignaturaNombre].map((estudianteData: { id: number, nombre: string }) => {
                    return new Estudiante(estudianteData.id, estudianteData.nombre)
                })
                let asignatura = new Asignatura(asignaturaNombre, estudiantes);
                asignaturas.push(asignatura);
            }
            let profesor = new Profesor(profesorNombre, 0, asignaturas);
            this.profesores.push(profesor);
        }
        this.profesor = this.profesores.find((profesor) => profesor.nombre == params['nombre'])?? new Profesor('', 0, []);
      })
    })}
    
}
