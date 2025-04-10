# Gestor de Tareas - React + TypeScript + Vite

Un gestor de tareas moderno y funcional desarrollado con React, TypeScript y Vite. Permite crear, editar, eliminar y marcar como completadas las tareas, con un diseño atractivo y responsivo.

## 🚀 Características

- 📝 Creación de tareas con título, descripción, etiqueta y prioridad
- 🏷️ Sistema de etiquetas para categorizar tareas
- ⚡ Prioridades visuales (Baja, Media, Alta) con colores distintivos
- ✅ Marcar tareas como completadas
- ✏️ Edición de tareas existentes
- 🗑️ Eliminación de tareas
- 💾 Persistencia de datos en localStorage
- 🎨 Interfaz moderna con Tailwind CSS
- 📱 Diseño responsivo

## 🛠️ Tecnologías Utilizadas

- React 18
- TypeScript
- Vite
- Tailwind CSS
- LocalStorage para persistencia de datos

## 📋 Requisitos Previos

- Node.js (versión 14 o superior)
- npm o yarn

## 🔧 Instalación

1. Clona el repositorio:
```bash
git clone [URL_DEL_REPOSITORIO]
cd react-crud
```

2. Instala las dependencias:
```bash
npm install
# o
yarn install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
# o
yarn dev
```

4. Abre tu navegador y visita:
```
http://localhost:5173
```

## 🎯 Funcionalidades Detalladas

### Creación de Tareas
- Ingresa un título (obligatorio)
- Añade una descripción opcional
- Asigna una etiqueta para categorizar
- Selecciona la prioridad (Baja, Media, Alta)
- Las tareas se guardan automáticamente en localStorage

### Gestión de Tareas
- **Marcar como completada**: Haz clic en el checkbox para marcar/desmarcar una tarea
- **Editar**: Haz clic en el botón "Editar" para modificar cualquier campo de la tarea
- **Eliminar**: Elimina tareas que ya no necesites
- **Prioridades visuales**:
  - Baja: Verde
  - Media: Amarillo
  - Alta: Rojo

### Interfaz de Usuario
- Diseño moderno con Tailwind CSS
- Colores oscuros para mejor legibilidad
- Botones intuitivos con efectos hover
- Formularios responsivos
- Indicadores visuales de estado

## 🎨 Estructura del Proyecto

```
src/
├── components/
│   ├── FormularioTarea/
│   ├── ListaTareas/
│   └── Tarea/
├── types/
│   └── tarea.ts
└── App.tsx
```

## 📦 Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo
- `npm run build`: Construye la aplicación para producción
- `npm run preview`: Previsualiza la build de producción
- `npm run lint`: Ejecuta el linter
