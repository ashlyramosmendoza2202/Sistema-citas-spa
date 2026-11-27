import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { SpaData } from '../../services/spa-data';

@Component({
  selector: 'app-formulario-reserva',
  imports: [FormsModule, RouterLink],
  templateUrl: './formulario-reserva.html',
  styleUrl: './formulario-reserva.css'
})
export class FormularioReserva {
  cliente = '';
  servicioSeleccionado = '';
  terapeutaSeleccionada = '';
  fecha = '';
  hora = '';
  mensajeExito = '';
  errorValidacion = false;

  horarios = ['09:00 AM', '10:30 AM', '01:00 PM', '03:00 PM', '04:30 PM'];

  constructor(public spa: SpaData) {
    if (this.spa.servicios.length > 0) {
      this.servicioSeleccionado = this.spa.servicios[0].nombre;
    }
    if (this.spa.terapeutas.length > 0) {
      this.terapeutaSeleccionada = this.spa.terapeutas[0].nombre;
    }
  }

  seleccionarServicio(nombre: string) {
    this.servicioSeleccionado = nombre;
  }

  seleccionarTerapeuta(nombre: string) {
    this.terapeutaSeleccionada = nombre;
  }

  seleccionarHora(horario: string) {
    this.hora = horario;
  }

  agendarCita() {
    if (
      !this.cliente.trim() ||
      !this.servicioSeleccionado ||
      !this.terapeutaSeleccionada ||
      !this.fecha ||
      !this.hora
    ) {
      this.errorValidacion = true;
      this.mensajeExito = '';
      return;
    }

    this.errorValidacion = false;
    this.spa.agregarReserva({
      cliente: this.cliente.trim(),
      servicio: this.servicioSeleccionado,
      terapeuta: this.terapeutaSeleccionada,
      fecha: this.fecha,
      hora: this.hora
    });

    this.mensajeExito = `Cita confirmada para ${this.cliente.trim()} (${this.servicioSeleccionado} con ${this.terapeutaSeleccionada} el ${this.fecha} a las ${this.hora}).`;
    this.cliente = '';
    this.fecha = '';
    this.hora = '';
  }
}