import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LibrosComponent } from './libros/libros.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LibroDetalleComponent } from './libro-detalle/libro-detalle.component';
import { LibroNuevoComponent } from './libro-nuevo/libro-nuevo.component';
import { LibroModificacionComponent } from './libro-modificacion/libro-modificacion.component';

export const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "libros", component: LibrosComponent },
    { path: "contacto", component: ContactoComponent },
    { path: "libroDetalle/:id", component: LibroDetalleComponent },
    { path: "libroNuevo", component: LibroNuevoComponent },
    { path: "libroModificacion", component: LibroModificacionComponent },
    { path: "", component: HomeComponent },
    { path: "**", redirectTo: "home" },

];
