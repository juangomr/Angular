import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { Heroe } from './model/model.heroes';
import { HeroesService } from './services/heroes.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'EjRepaso4';
  heroe?: Observable<Heroe>;

  constructor(private obtenerHeroe: HeroesService) { }
  ngOnInit(): void {
    this.heroe = this.obtenerHeroe.getHeroe();
  }
}
