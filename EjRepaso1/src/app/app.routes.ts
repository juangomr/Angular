import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { UsuarioComponent } from './usuario/usuario.component';

export const routes: Routes = [
    {
        path: 'usuario',
        component: UsuarioComponent,
    },
    {
        path: 'post',
        component: PostComponent,
    },
   
];
