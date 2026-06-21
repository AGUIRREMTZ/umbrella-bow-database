import React from 'react';

function PanelDetalles({ criatura }) {
  if (!criatura) {
    return (
      <div className="border border-zinc-800 bg-zinc-950/20 text-zinc-600 rounded-md p-6 text-center h-full flex flex-col justify-center items-center font-mono">
        <div className="w-12 h-12 border border-zinc-800 rounded-full flex items-center justify-center text-zinc-700 text-lg mb-3 animate-pulse">
          ?
        </div>
        <p className="text-xs uppercase tracking-widest">Seleccione un espécimen del archivo para desplegar su análisis táctico</p>
      </div>
    );
  }

  return (
    <div className="border border-red-900/30 bg-zinc-950/80 rounded-md p-5 font-mono sticky top-6 shadow-xl">
      <div className="text-center border-b border-zinc-800 pb-4">
        <span className="text-[10px] bg-red-950 text-red-400 border border-red-900 px-2 py-0.5 rounded uppercase tracking-widest font-bold">
          AMENAZA: {criatura.dangerLevel}
        </span>
        <h2 className="text-lg font-black text-white uppercase tracking-wider mt-2">
          {criatura.name}
        </h2>
        <p className="text-xs text-zinc-500 font-mono mt-0.5">ID: {criatura.id}</p>
      </div>

      <div className="mt-4 border border-zinc-800 rounded bg-black p-2 relative overflow-hidden">
        <img
          src={criatura.image}
          alt={criatura.name}
          className="w-full h-auto max-h-72 object-contain mx-auto rounded transition-all duration-500 filter brightness-95 contrast-105"
        />
      </div>

      <div className="mt-4 space-y-3 text-xs text-zinc-300 leading-relaxed border-b border-zinc-800 pb-4">
        <div>
          <span className="text-zinc-500 block uppercase tracking-wider text-[10px] font-bold">Cepa Patógena:</span>
          <p className="text-red-400 font-semibold">{criatura.virus}</p>
        </div>
        <div>
          <span className="text-zinc-500 block uppercase tracking-wider text-[10px] font-bold">Descripción del Sujeto:</span>
          <p className="text-zinc-400 italic mt-0.5">{criatura.description}</p>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="text-[11px] uppercase tracking-widest text-zinc-400 font-bold mb-3">
          Evaluación de Combate
        </h3>
        
        <div className="space-y-3">
          {Object.entries(criatura.stats).map(([atributo, valor]) => (
            <div key={atributo} className="text-xs">
              <div className="flex justify-between uppercase text-[10px] text-zinc-400 mb-1">
                <span className="tracking-wider">{atributo}</span>
                <span className="font-bold text-zinc-200">{valor}%</span>
              </div>
              <div className="w-full bg-zinc-900 h-2 rounded border border-zinc-800 overflow-hidden">
                <div
                  className="bg-red-600 h-full shadow-[0_0_8px_#dc2626] transition-all duration-500 ease-out"
                  style={{ width: `${valor}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 pt-3 border-t border-zinc-900 text-center text-[9px] text-zinc-600 uppercase tracking-widest">
        PROPIEDAD CONFIDENCIAL DE UMBRELLA
      </div>
    </div>
  );
}

export default PanelDetalles;