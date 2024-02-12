import { Routes, RouterModule } from '@angular/router';
import { LibrosComponent } from './libros/libros.component';
import { ContactoComponent } from './contacto/contacto.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { LibrodetalleComponent } from './librodetalle/librodetalle.component';

export const routes: Routes = [

  {
    path: 'home',
    component: HomeComponentComponent,
  },
  {
    path: 'libros',
    component: LibrosComponent,
  },
  {
    path: 'contact',
    component: ContactoComponent,
  }, {
    path: 'librosdetalles/:id',
    component: LibrodetalleComponent,
  },
];
