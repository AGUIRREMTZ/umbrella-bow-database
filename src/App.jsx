import React, { useState } from 'react';
import datosBows from './data/bows.json';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ContenedorBows from './components/ContenedorBows';
import PanelDetalles from './components/PanelDetalles';

function App() {
  const [criaturas] = useState(datosBows);
  const [busqueda, establecerBusqueda] = useState('');
  const [criaturaSeleccionada, establecerCriaturaSeleccionada] = useState(null);

  const criaturasFiltradas = criaturas.filter((criatura) => 
    criatura.name.toLowerCase().includes(busqueda.toLowerCase()) ||
    criatura.id.toLowerCase().includes(busqueda.toLowerCase()) ||
    criatura.virus.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black text-gray-100 font-mono p-4 md:p-8 selection:bg-red-700 selection:text-white">
      <div className="max-w-7xl mx-auto border border-zinc-800 p-4 md:p-6 bg-zinc-950/40 rounded-lg shadow-2xl shadow-red-950/10">
        
        <Header />
        
        <div className="mt-6">
          <SearchBar searchTerm={busqueda} setSearchTerm={establecerBusqueda} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          <div className="lg:col-span-2">
            <ContenedorBows 
              criaturas={criaturasFiltradas} 
              alSeleccionarCriatura={establecerCriaturaSeleccionada} 
              idSeleccionada={criaturaSeleccionada?.id} 
            />
          </div>
          
          <div className="lg:col-span-1">
            <PanelDetalles criatura={criaturaSeleccionada} />
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;