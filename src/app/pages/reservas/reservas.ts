import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SpaData } from '../../services/spa-data';

@Component({
  selector: 'app-reservas',
  imports: [RouterLink],
  templateUrl: './reservas.html',
  styleUrl: './reservas.css'
})
export class Reservas {
  constructor(public spa: SpaData) {}

  cambiarEstado(reserva: any) {
    reserva.estado = reserva.estado === 'Confirmada' ? 'Pendiente' : 'Confirmada';
  }
}