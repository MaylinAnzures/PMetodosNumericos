import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
// Importas las demás páginas conforme las vayas creando

export default function App() {
  const [metodoActivo, setMetodoActivo] = useState<string>('home');

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Menú Lateral Fijo */}
      <Sidebar 
        metodoSeleccionado={metodoActivo} 
        setMetodoSeleccionado={setMetodoActivo} 
      />

      {/* Área de Contenido Principal */}
      <main className="flex-1 p-8 overflow-y-auto">
        {metodoActivo === 'home' && (
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Plataforma de Métodos Numéricos
            </h2>
            <p className="text-gray-600">
              Selecciona un método en el menú lateral para comenzar a resolver ecuaciones.
            </p>
          </div>
        )}

        {metodoActivo === 'biseccion' }

        {metodoActivo === 'regula-falsi' && (
          <div><h2 className="text-xl font-bold">Módulo de Regula Falsi (En desarrollo)</h2></div>
        )}

        {metodoActivo === 'newton' && (
          <div><h2 className="text-xl font-bold">Módulo de Newton-Raphson (En desarrollo)</h2></div>
        )}
      </main>
    </div>
  );
}