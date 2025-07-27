// import { useEffect, useState } from 'react';
import CodeCard from './CodeCard';
import codes from './../../json/codeheroui.json';

export default function CodesMoeculas() {
    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <h1 className="text-3xl font-bold text-center mb-8">Catálogo de Código</h1>
            {codes.map(code => (
                <CodeCard
                    key={code.id}
                    title={code.title}
                    descripcion={code.descripcion}
                    code={code.code}
                />
            ))}
        </div>
    );
}
