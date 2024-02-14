import { Component } from '@angular/core';
import { AddPersonajeComponent } from '../add-personaje/add-personaje.component';
import { ListPersonajeComponent } from '../list-personaje/list-personaje.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [AddPersonajeComponent, ListPersonajeComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {}
