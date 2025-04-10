import { useState } from "react";
import "./App.css";
import { FormularioTarea } from "./components/FormularioTarea/FormularioTarea";
import { ListaTareas } from "./components/ListaTareas/ListaTareas";
import { Tarea as TareaType } from "./types/tarea";

function App() {
  const [tareas, setTareas] = useState<TareaType[]>([]);

  const agregarTarea = (nuevaTarea: TareaType) => {
    // Si la tarea ya existe (tiene ID), actualizarla
    if (tareas.some(t => t.id === nuevaTarea.id)) {
      setTareas(tareas.map(tarea => 
        tarea.id === nuevaTarea.id ? nuevaTarea : tarea
      ));
    } else {
      // Si es una nueva tarea, agregarla
      setTareas([...tareas, nuevaTarea]);
    }
  };

  const eliminarTarea = (id: string) => {
    setTareas(tareas.filter(tarea => tarea.id !== id));
  };

  return (
    <div className="min-h-screen bg-neutral-900 py-8">
      <div className="max-w-4xl mt-32 mx-auto px-4">
        <h1 className="text-7xl font-bold text-center text-white mb-10">
          Gestor de tareas
        </h1>
        <FormularioTarea onAgregarTarea={agregarTarea} />
        <ListaTareas tareas={tareas} onAgregarTarea={agregarTarea} onEliminarTarea={eliminarTarea} />
      </div>
    </div>
  );
}

export default App;
