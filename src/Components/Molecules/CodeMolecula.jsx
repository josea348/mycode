import React from 'react';
import codes from './../../json/codeheroui.json';

export default function CodeMoecula() {


  return (
    // Contenedor principal con flexbox para envolver los fragmentos de código
    <div className="flex flex-wrap gap-4 p-4 justify-center items-center min-h-screen bg-gray-100">
      {/* Fragmento de código por defecto */}
          {codes.map(item => (
          <div key={item.id}>
                  <p>{item.name}</p>
        <code className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg font-mono text-sm shadow-md">
                  <p>{item.code}</p>
                  </code>
              </div>
        ))}
    </div>
  );
}
