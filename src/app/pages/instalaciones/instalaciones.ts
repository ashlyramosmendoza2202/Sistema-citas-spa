import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SpaData } from '../../services/spa-data';

@Component({
  selector: 'app-instalaciones',
  imports: [RouterLink],
  templateUrl: './instalaciones.html',
  styleUrl: './instalaciones.css'
})
export class Instalaciones {
  constructor(public spa: SpaData) {}
}