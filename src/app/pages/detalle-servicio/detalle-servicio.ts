import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SpaData } from '../../services/spa-data';

@Component({
  selector: 'app-detalle-servicio',
  imports: [RouterLink],
  templateUrl: './detalle-servicio.html',
  styleUrl: './detalle-servicio.css'
})
export class DetalleServicio {
  servicio: any;

  constructor(private route: ActivatedRoute, public spa: SpaData) {
    const idParam = Number(this.route.snapshot.paramMap.get('id'));
    this.servicio = this.spa.servicios.find(s => s.id === idParam) || this.spa.servicios[0];
  }
}