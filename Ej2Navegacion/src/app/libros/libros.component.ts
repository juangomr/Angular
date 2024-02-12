import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { libro } from '../model/libro.model';
import { LibrosService } from '../services/libros.service';
import { LibrodetalleComponent } from '../librodetalle/librodetalle.component';
import { RouterLink, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-libros',
  standalone: true,
  imports: [CommonModule, LibrodetalleComponent, RouterOutlet, RouterLink],
  templateUrl: './libros.component.html',
  styleUrl: './libros.component.css'
})
export class LibrosComponent implements OnInit {
  libross?: libro[];
  constructor(private obtenerLibro: LibrosService) { }
  ngOnInit(): void {
    this.libross = this.obtenerLibro.getLibro();
  }

}
