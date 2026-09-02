interface SidebarProps {
    metodoSeleccionado: string;
    setMetodoSeleccionado: (metodo: string) => void;
  }
  
  export function Sidebar({ metodoSeleccionado, setMetodoSeleccionado }: SidebarProps) {
    const metodos = [
      { id: 'home', nombre: 'Inicio / General' },
      { id: 'biseccion', nombre: 'Método de Bisección' },
      { id: 'regula-falsi', nombre: 'Regula Falsi' },
      { id: 'newton', nombre: 'Newton-Raphson' },
      { id: 'secante', nombre: 'Método de la Secante' },
    ];
  
    return (
      <aside className="w-64 bg-slate-900 text-white min-h-screen p-4 flex flex-col">
        <h1 className="text-xl font-bold mb-6 text-blue-400 border-b border-slate-700 pb-2">
          Métodos Numéricos
        </h1>
        
        <nav className="flex-1 space-y-2">
          {metodos.map((item) => (
            <button
              key={item.id}
              onClick={() => setMetodoSeleccionado(item.id)}
              className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                metodoSeleccionado === item.id
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              {item.nombre}
            </button>
          ))}
        </nav>
      </aside>
    );
  }