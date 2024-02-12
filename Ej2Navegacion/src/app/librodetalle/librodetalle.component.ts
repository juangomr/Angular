import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { libro } from '../model/libro.model';
import { LibrosService } from '../services/libros.service';

@Component({
  selector: 'app-librodetalle',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './librodetalle.component.html',
  styleUrl: './librodetalle.component.css'
})
export class LibrodetalleComponent implements OnInit {
  libross?: libro[];
  constructor(private obtenerLibro: LibrosService) { }
  ngOnInit(): void {
    this.libross = this.obtenerLibro.getLibro();
  }

}
