import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Episodio } from '../model/model.rick';
import { RickService } from '../services/rick.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-episodios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './episodios.component.html',
  styleUrl: './episodios.component.css'
})
export class EpisodiosComponent implements OnInit {
  epi?: Observable<Episodio>;
  constructor(private obtenerEpisodio: RickService) { }
  ngOnInit(): void {
    this.epi = this.obtenerEpisodio.getEpisodio();
  }

}
