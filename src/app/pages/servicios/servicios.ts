import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SpaData } from '../../services/spa-data';

@Component({
  selector: 'app-servicios',
  imports: [RouterLink],
  templateUrl: './servicios.html',
  styleUrl: './servicios.css'
})
export class Servicios {
  constructor(public spa: SpaData) {}
}