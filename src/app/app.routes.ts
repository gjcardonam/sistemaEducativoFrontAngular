import { Routes } from '@angular/router';
import { ProfesorComponent } from './pages/profesor/profesor.component';
import { HomeComponent } from './pages/home/home.component';
import { DetalleProfesorComponent } from './pages/detalle-profesor/detalle-profesor.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'profesor', component: ProfesorComponent},
    {path: 'profesor/:nombre', component: DetalleProfesorComponent},
    {path: '**', pathMatch: 'full', redirectTo: ''}
];
