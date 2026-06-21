import React from 'react';

function ContenedorBows({ criaturas, alSeleccionarCriatura, idSeleccionada }) {
  if (criaturas.length === 0) {
    return (
      <div className="border border-dashed border-zinc-800 rounded p-8 text-center text-zinc-600 bg-zinc-950/20">
        [ ADVERTENCIA: NO SE ENCONTRARON REGISTROS DE AMENAZA QUE COINCIDAN ]
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {criaturas.map((criatura) => {
        const estaSeleccionada = idSeleccionada === criatura.id;
        
        return (
          <div
            key={criatura.id}
            onClick={() => alSeleccionarCriatura(criatura)}
            className={`cursor-pointer bg-zinc-900/40 border rounded transition-all duration-200 overflow-hidden group hover:scale-[1.01] ${
              estaSeleccionada 
                ? 'border-red-600 shadow-[0_0_15px_rgba(220,38,38,0.25)] bg-zinc-900/80' 
                : 'border-zinc-800 hover:border-zinc-600'
            }`}
          >
            <div className="h-44 bg-zinc-950 relative overflow-hidden border-b border-zinc-800">
              <img
                src={criatura.image}
                alt={criatura.name}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
              />
              <span className="absolute top-2 right-2 bg-black/80 border border-zinc-700 text-[10px] text-zinc-400 font-mono px-1.5 py-0.5 rounded">
                {criatura.id}
              </span>
            </div>

            <div className="p-4">
              <h3 className="text-sm font-bold tracking-wider text-zinc-100 uppercase group-hover:text-red-400 transition-colors">
                {criatura.name}
              </h3>
              <p className="text-[11px] text-zinc-500 font-mono mt-1 italic">
                Codename: {criatura.codename}
              </p>
              
              <div className="mt-3 flex justify-between items-center text-[10px]">
                <span className="text-zinc-400">Virus: <strong className="text-zinc-300 font-normal">{criatura.virus}</strong></span>
                <span className={`px-2 py-0.5 rounded font-bold uppercase ${
                  criatura.dangerLevel === 'Catastrófico' || criatura.dangerLevel === 'Crítico'
                    ? 'bg-red-950/60 text-red-400 border border-red-900/60'
                    : 'bg-amber-950/60 text-amber-400 border border-amber-900/60'
                }`}>
                  {criatura.dangerLevel}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ContenedorBows;