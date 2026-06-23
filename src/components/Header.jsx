import React from 'react';

function Header() {
  return (
    <header className="border-b border-red-900/40 pb-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-red-600 rounded-full animate-pulse shadow-[0_0_8px_#dc2626]"></span>
          <h1 className="text-xl md:text-2xl font-black tracking-wider text-red-500 uppercase">
            Umbrella Corp.
          </h1>
        </div>
        <p className="text-xs text-zinc-500 mt-1 font-mono tracking-widest uppercase">
          Bio Organic Weapon (B.O.W.) Tactical Database
        </p>
      </div>
      
      <div className="bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded text-right font-mono text-[10px] md:text-xs text-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.05)]">
        <div>ESTATUS: <span className="font-bold animate-pulse">EN LÍNEA</span></div>
        <div className="text-zinc-500 text-[9px] mt-0.5 uppercase tracking-wider">Acceso Autorizado - Nivel 5</div>
      </div>
    </header>
  );
}

export default Header;
