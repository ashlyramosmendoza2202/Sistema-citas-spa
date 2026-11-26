import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpaData {
  servicios = [
    {
      id: 1,
      nombre: 'Masaje Geotermal con Piedras Volcánicas',
      categoria: 'Masajes',
      precio: 3500,
      duracion: '75 min',
      descripcion: 'Terapia profunda que combina masaje sueco con piedras basálticas calientes para liberar tensión muscular y equilibrar energía.',
      imagen: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600'
    },
    {
      id: 2,
      nombre: 'Ritual Facial Rose Quartz & Ácido Hialurónico',
      categoria: 'Tratamientos Faciales',
      precio: 4200,
      duracion: '60 min',
      descripcion: 'Limpieza profunda seguida de masaje con rodillos de cuarzo rosa y mascarilla iluminadora para hidratar y revitalizar el rostro.',
      imagen: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600'
    },
    {
      id: 3,
      nombre: 'Exfoliación Corporal de Cacao & Vainilla',
      categoria: 'Tratamientos Corporales',
      precio: 2800,
      duracion: '50 min',
      descripcion: 'Renovación celular completa utilizando cacao orgánico, sales suaves y extracto de vainilla para una piel aterciopelada.',
      imagen: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600'
    }
  ];

  terapeutas = [
    { id: 1, nombre: 'Valeria Mendoza', especialidad: 'Masoterapia & Piedras Calientes', experiencia: '6 años', imagen: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400' },
    { id: 2, nombre: 'Camila Duarte', especialidad: 'Cosmetología & Faciales Rose Quartz', experiencia: '5 años', imagen: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400' },
    { id: 3, nombre: 'Sofía Almonte', especialidad: 'Aromaterapia & Rituales Corporales', experiencia: '4 años', imagen: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400' }
  ];

  instalaciones = [
    { nombre: 'Suite Blush VIP', capacidad: '2 personas', descripcion: 'Cabina privada en tonos cálidos con jacuzzi de hidromasaje y aromaterapia de rosas.', imagen: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600' },
    { nombre: 'Salón de Hidroterapia Cacao', capacidad: '6 personas', descripcion: 'Circuito de aguas termales, sauna seco y baño de vapor relajante.', imagen: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=600' }
  ];

  reservas = [
    { id: 101, cliente: 'Laura Gómez', servicio: 'Masaje Geotermal con Piedras Volcánicas', terapeuta: 'Valeria Mendoza', fecha: '2026-11-28', hora: '10:00 AM', estado: 'Confirmada' },
    { id: 102, cliente: 'Mariana Pérez', servicio: 'Ritual Facial Rose Quartz & Ácido Hialurónico', terapeuta: 'Camila Duarte', fecha: '2026-11-28', hora: '02:00 PM', estado: 'Pendiente' }
  ];

  agregarReserva(nuevaReserva: any) {
    this.reservas.push({
      id: this.reservas.length + 101,
      ...nuevaReserva,
      estado: 'Confirmada'
    });
  }
}