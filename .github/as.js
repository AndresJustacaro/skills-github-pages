import React, { useState } from "react";
import { ClipboardCopy, Twitter, MessageCircle } from "lucide-react";

export default function GhostLayer() {
  const [copied, setCopied] = useState(false);
  const contractAddress = "9R5xJMd3ijXyc9TPQcV83fpexV24GYsgynhSquUJmFsW";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 flex flex-col items-center">
      {/* Logo del Token */}
      <img src="/ghostlayer-logo.png" alt="GhostLayer Logo" className="w-24 h-24 mb-4" />
      
      <h1 className="text-4xl font-bold mb-4">GhostLayer (GHOST)</h1>
      <p className="text-lg mb-6 text-gray-300">El token del futuro en la blockchain de Solana</p>
      
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-xl font-semibold mb-2">Detalles del Token</h2>
        <p><span className="font-semibold">Símbolo:</span> GHOST</p>
        <p><span className="font-semibold">Contrato:</span> {contractAddress} <button onClick={copyToClipboard} className="ml-2 bg-gray-700 px-2 py-1 rounded text-sm hover:bg-gray-600"> <ClipboardCopy size={16} /> </button></p>
        {copied && <p className="text-green-400 text-sm mt-2">¡Copiado al portapapeles!</p>}
      </div>
      
      <div className="mt-6 flex flex-wrap gap-4">
        <a href={`https://solscan.io/token/${contractAddress}`} target="_blank" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">Ver en Solscan</a>
        <a href="https://raydium.io/" target="_blank" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg">Comprar en Raydium</a>
      </div>
      
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-lg mt-8">
        <h2 className="text-xl font-semibold mb-2">Usos del Token</h2>
        <ul className="list-disc list-inside text-gray-300">
          <li><span className="font-semibold">Membresías y Beneficios:</span> Acceso exclusivo a contenido, herramientas y comunidad privada.</li>
          <li><span className="font-semibold">Medio de Pago:</span> Aceptado en plataformas y servicios asociados.</li>
          <li><span className="font-semibold">Recompensas y Staking:</span> Obtén beneficios por mantener y bloquear tokens.</li>
        </ul>
      </div>

      {/* Sección de Comunidad */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-lg mt-8 text-center">
        <h2 className="text-xl font-semibold mb-4">Únete a la Comunidad</h2>
        <div className="flex justify-center gap-4">
          <a href="https://twitter.com/ghostlayer" target="_blank" className="bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2"> <Twitter size={20} /> Twitter</a>
          <a href="https://t.me/ghostlayer" target="_blank" className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"> <MessageCircle size={20} /> Telegram</a>
        </div>
      </div>
    </div>
  );
}
