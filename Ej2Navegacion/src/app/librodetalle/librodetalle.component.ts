import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { libro } from '../model/libro.model';
import { LibrosService } from '../services/libros.service';

@Component({
  selector: 'app-librodetalle',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './librodetalle.component.html',
  styleUrl: './librodetalle.component.css',
})
export class LibrodetalleComponent implements OnInit {
  libross: libro = { id: 0, titulo: '', autor: '' };

  constructor(
    private obtenerLibro: LibrosService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    const libroId = this.route.snapshot.params['id'];
    this.libross = this.obtenerLibro.getLibro(libroId);
  }
}
