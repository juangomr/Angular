import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { AleatorioComponent } from './aleatorio/aleatorio.component';
import { TablaComponent } from './tabla/tabla.component';

export const routes: Routes = [
    {
        path: "aleatorio", component: AleatorioComponent
    },
    {
        path: "tabla", component: TablaComponent
    },
   
];

