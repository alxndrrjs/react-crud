export interface Tarea {
  id: string;
  titulo: string;
  descripcion: string;
  etiqueta: string;
  prioridad: 'baja' | 'media' | 'alta';
  completada: boolean;
} 