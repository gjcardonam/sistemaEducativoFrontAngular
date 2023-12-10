import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Profesor } from '../../entities/profesor';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-profesor',
  standalone: true,
  imports: [ HttpClientModule, RouterLink ],
  templateUrl: './profesor.component.html',
  styleUrl: './profesor.component.css'
})
export class ProfesorComponent implements OnInit {

  http = inject(HttpClient);
  profesores:Profesor[] = [];

  getProfesores(): Observable<any> {
    return this.http.get('http://localhost:3000/profesor/listar');
  }

  ngOnInit() {
    this.getProfesores().subscribe((data) => {
      this.profesores = data;
    })
  }

}
