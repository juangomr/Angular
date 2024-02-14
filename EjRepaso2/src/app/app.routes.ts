import { Routes } from '@angular/router';
import { ListaPeliculasComponent } from './lista-peliculas/lista-peliculas.component';
import { DetallesComponent } from './detalles/detalles.component';

export const routes: Routes = [
    {
        path: 'listaPeliculas',
        component: ListaPeliculasComponent,
    },
    {
        path: 'detalles/:id',
        component: DetallesComponent,
    },
];
