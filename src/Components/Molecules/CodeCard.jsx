import { useState } from "react";

export default function CodeCard({ title, descripcion, ruta, code }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };

    return (
        <div className="bg-white rounded-2xl shadow p-5 mb-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
            <p className="text-sm text-gray-500 mb-4" style={{ whiteSpace: 'pre-line' }}>Descripción: <span className="font-medium">{descripcion}</span></p>
            <p className="text-sm text-gray-500 mb-4">ruta: <span className="font-medium">{ruta}</span></p>
            <pre className="bg-gray-800 text-green-300 text-sm p-1 rounded overflow-x-auto">
                <div className="bg-gray-900 text-green-300 text-sm p-4 rounded overflow-x-auto">
                    <button
                        className=" bg-gray-700 text-white text-xs py-1 px-2 rounded hover:bg-gray-600"
                        onClick={handleCopy}
                    >
                        {copied ? 'copiado' : 'copiar'}
                    </button>
                </div>
                <code>{code}</code>
            </pre>
        </div>
    );
}
