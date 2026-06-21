import React from 'react';

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="w-full bg-zinc-900/60 border border-zinc-800 p-4 rounded-md">
      <label className="block text-xs uppercase tracking-widest text-zinc-400 mb-2 font-bold">
        Filtrar Registro de Amenazas
      </label>
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Buscar por Nombre, ID (ej. NE-003) o cepa de Virus..."
          className="w-full bg-black border border-zinc-700 focus:border-red-600 focus:ring-1 focus:ring-red-600 rounded px-4 py-2 text-sm text-gray-200 placeholder-zinc-600 focus:outline-none transition-all font-mono"
        />
        {searchTerm && (
          <button
            onClick={() => setSearchTerm('')}
            className="absolute right-3 top-2 text-zinc-500 hover:text-red-500 text-xs transition-colors"
          >
            [BORRAR]
          </button>
        )}
      </div>
      <div className="text-[10px] text-zinc-500 mt-2 italic">
      </div>
    </div>
  );
}

export default SearchBar;