import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SpaData } from '../../services/spa-data';

@Component({
  selector: 'app-terapeutas',
  imports: [RouterLink],
  templateUrl: './terapeutas.html',
  styleUrl: './terapeutas.css'
})
export class Terapeutas {
  constructor(public spa: SpaData) {}
}