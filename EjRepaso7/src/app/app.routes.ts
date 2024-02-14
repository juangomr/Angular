import { Routes } from '@angular/router';
import { BreedsComponent } from './breeds/breeds.component';
import { FactsComponent } from './facts/facts.component';
import { FactComponent } from './fact/fact.component';

export const routes: Routes = [{
    path: "breeds", component: BreedsComponent
},
{
    path: "facts", component: FactsComponent
},
{
    path: "fact", component: FactComponent
}];
