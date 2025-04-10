import { Tarea } from '../Tarea/Tarea';
import { Tarea as TareaType } from '../../types/tarea';

interface ListaTareasProps {
  tareas: TareaType[];
  onAgregarTarea: (tarea: TareaType) => void;
  onEliminarTarea: (id: string) => void;
}

export const ListaTareas = ({ tareas, onAgregarTarea, onEliminarTarea }: ListaTareasProps) => {
  const toggleCompletada = (id: string) => {
    const tareaActualizada = tareas.find(t => t.id === id);
    if (tareaActualizada) {
      onAgregarTarea({
        ...tareaActualizada,
        completada: !tareaActualizada.completada
      });
    }
  };

  const eliminarTarea = (id: string) => {
    onEliminarTarea(id);
  };

  const editarTarea = (id: string, tareaActualizada: Partial<TareaType>) => {
    const tareaExistente = tareas.find(t => t.id === id);
    if (tareaExistente) {
      onAgregarTarea({
        ...tareaExistente,
        ...tareaActualizada,
        id: tareaExistente.id
      });
    }
  };

  return (
    <div className="2xl:max-w-[60%] md:max-w-[80%] sm:max-w-[100%] mx-auto mt-8">
      <div className="space-y-4">
        {tareas.map(tarea => (
          <Tarea
            key={tarea.id}
            tarea={tarea}
            onToggleCompletada={toggleCompletada}
            onEliminar={eliminarTarea}
            onEditar={editarTarea}
          />
        ))}
      </div>
    </div>
  );
};
