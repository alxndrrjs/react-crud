import { useState } from 'react';
import { Tarea as TareaType } from '../../types/tarea';

interface FormularioTareaProps {
  onAgregarTarea: (tarea: TareaType) => void;
}

export const FormularioTarea = ({ onAgregarTarea }: FormularioTareaProps) => {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [etiqueta, setEtiqueta] = useState('');
  const [prioridad, setPrioridad] = useState<'baja' | 'media' | 'alta'>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (titulo.trim()) {
      const nuevaTarea: TareaType = {
        id: Date.now().toString(),
        titulo: titulo.trim(),
        descripcion: descripcion.trim(),
        etiqueta: etiqueta.trim(),
        prioridad,
        completada: false
      };
      onAgregarTarea(nuevaTarea);
      setTitulo('');
      setDescripcion('');
      setEtiqueta('');
      setPrioridad('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="2xl:max-w-[60%] md:max-w-[80%] sm:max-w-[100%] mx-auto mt-8 space-y-4">
      <div className="flex space-x-4 flex-col">
        <div className="flex flex-col space-y-2 mb-6 mr-0">
            <label className="text-lg text-white font-bold" htmlFor="titulo">Título</label>
            <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            placeholder="Título de la tarea..."
            className="flex-1 px-4 py-2 rounded-xl bg-neutral-700 text-white border-none focus:outline-none"
            required
            />
        </div>
        <div className="flex flex-col space-y-2 mb-6 mr-0">
            <label className="text-lg text-white font-bold" htmlFor="descripcion">Descripción</label>
            <textarea
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            placeholder="Descripción de la tarea..."
            className="w-full px-4 py-2 rounded-xl bg-neutral-700 text-white border-none focus:outline-none"
            rows={3}
            />
        </div>
        <div className="flex flex-col space-y-2 mb-6 mr-0">
            <label className="text-lg text-white font-bold" htmlFor="prioridad">Prioridad</label>
            {/* <select
                value={prioridad}
                onChange={(e) => setPrioridad(e.target.value as 'baja' | 'media' | 'alta')}
                className="px-4 py-2 w-60 rounded-xl bg-neutral-700 text-white border-none focus:outline-none hover:bg-neutral-600 transition-colors duration-200 cursor-pointer appearance-none"
            >
                <option value="baja">Baja</option>
                <option value="media">Media</option>
                <option value="alta">Alta</option>
            </select> */}
            <div className="flex w-full">
                <button 
                    type="button" 
                className={`px-4 py-2 w-60 rounded-bl-xl rounded-tl-xl text-white border-2 ${
                    prioridad === 'baja' 
                    ? 'bg-green-600 border-green-400 font-bold shadow-lg' 
                    : 'bg-neutral-700 border-transparent hover:bg-neutral-600'
                } transition-all duration-200 cursor-pointer`}
                onClick={() => setPrioridad('baja')}    
                >
                    Baja
                </button>
                <button 
                    type="button" 
                    className={`px-4 py-2 w-60 text-white border-2 ${
                        prioridad === 'media' 
                        ? 'bg-yellow-600 border-yellow-400 font-bold shadow-lg' 
                        : 'bg-neutral-700 border-transparent hover:bg-neutral-600'
                    } transition-all duration-200 cursor-pointer`}
                    onClick={() => setPrioridad('media')}
                >
                    Media
                </button>
                <button 
                    type="button" 
                    className={`px-4 py-2 w-60 rounded-br-xl rounded-tr-xl text-white border-2 ${
                        prioridad === 'alta' 
                        ? 'bg-red-600 border-red-400 font-bold shadow-lg' 
                        : 'bg-neutral-700 border-transparent hover:bg-neutral-600'
                    } transition-all duration-200 cursor-pointer`}
                    onClick={() => setPrioridad('alta')}
                >
                    Alta
                </button>
            </div>
            <div className="w-full">
                <div className="flex w-full flex-col space-y-2">
                    <label className="text-lg text-white font-bold" htmlFor="etiqueta">Etiqueta</label>
                    <input
                    type="text"
                    value={etiqueta}
                    onChange={(e) => setEtiqueta(e.target.value)}
                    placeholder="Etiqueta..."
                    className="flex-1 px-4 py-2 w-full rounded-xl bg-neutral-700 text-white border-none focus:outline-none"
                    />
                </div>
            </div>
        </div>
      </div>
      <div className="flex justify-center space-x-4">
        <button
          type="submit"
          className="px-6 py-2 transition-all duration-300 cursor-pointer text-white w-44 bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Agregar
        </button>
      </div>
    </form>
  );
};
