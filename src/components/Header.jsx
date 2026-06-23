import React from 'react';

function Header() {
  return (
    <header className="border-b border-red-900/40 pb-4 flex flex-col md:flex-row md:items-start justify-between gap-4">
      
      <div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-red-600 rounded-full"></span>
          <h1 className="text-xl md:text-2xl font-black tracking-wider text-white">
            UMBRELLA CORP.
          </h1>
        </div>
        <p className="text-xs text-zinc-500 mt-1 font-mono tracking-wide">
          Bio Organic Weapon (B.O.W.) Tactical Database
        </p>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-md font-mono text-center md:text-right shadow-inner min-w-[160px]">
        <div className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest">
          ESTATUS: 
          <span className="font-bold text-red-500 ml-1.5">
            EN LÍNEA
          </span>
        </div>
        <div className="text-zinc-600 text-[9px] mt-0.5 uppercase tracking-tighter">
          Acceso Autorizado - Nivel 5
        </div>
      </div>

    </header>
  );
}

export default Header;
