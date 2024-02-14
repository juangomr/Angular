import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RickService } from '../services/rick.service';
import { Localizacion } from '../model/model.rick';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-localizacion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './localizacion.component.html',
  styleUrl: './localizacion.component.css'
})
export class LocalizacionComponent implements OnInit {
  local?: Observable<Localizacion>;
  constructor(private obtenerLocalizacion: RickService) { }
  ngOnInit(): void {
    this.local = this.obtenerLocalizacion.getLocalizacion();
  }

}
