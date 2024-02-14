import { Routes } from '@angular/router';
import { RickComponent } from './rick/rick.component';
import { EpisodiosComponent } from './episodios/episodios.component';
import { LocalizacionComponent } from './localizacion/localizacion.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [{
    path: "rick", component: RickComponent
},
{
    path: "episodios", component: EpisodiosComponent
},
{
    path: "localizacion", component: LocalizacionComponent
},
{
    path: "**", redirectTo: "home"
}];
