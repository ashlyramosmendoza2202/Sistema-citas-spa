import { Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';
import { Servicios } from './pages/servicios/servicios';
import { DetalleServicio } from './pages/detalle-servicio/detalle-servicio';
import { Terapeutas } from './pages/terapeutas/terapeutas';
import { Reservas } from './pages/reservas/reservas';
import { FormularioReserva } from './pages/formulario-reserva/formulario-reserva';
import { Instalaciones } from './pages/instalaciones/instalaciones';
import { PanelPrincipal } from './pages/panel-principal/panel-principal';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: Inicio },
  { path: 'servicios', component: Servicios },
  { path: 'servicio/:id', component: DetalleServicio },
  { path: 'terapeutas', component: Terapeutas },
  { path: 'reservas', component: Reservas },
  { path: 'reservar', component: FormularioReserva },
  { path: 'instalaciones', component: Instalaciones },
  { path: 'panel', component: PanelPrincipal },
  { path: '**', redirectTo: 'inicio' }
];
