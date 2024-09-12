"use client";

import { useState } from 'react';

export default function Home() {
  const [codigo, setCodigo] = useState('');  // Almacena el código escrito por el usuario
  const [archivo, setArchivo] = useState(null);  // Almacena el archivo seleccionado por el usuario
  const [resultados, setResultados] = useState('');  // Almacena los resultados del lexer
  const [contador, setContador] = useState(0);  // Almacena el número de tokens contados

  // Función para manejar la selección de archivo
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const fileContent = event.target?.result as string;
        setCodigo(fileContent);  // Carga el contenido del archivo al estado 'codigo'
      };
      reader.readAsText(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    // Hacer una solicitud POST a FastAPI con el código C
    const response = await fetch("http://127.0.0.1:8000/analizar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ codigo }),  // Enviar el contenido del archivo o el textarea
    });
  
    const data = await response.json();
    setResultados(data.resultados.join("\n"));
    setContador(data.tokens_contados);  // Actualizar el estado con el número de tokens contados
  };
  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Lexer C</h1>
      
      <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white shadow-md rounded-lg p-6">
        <label htmlFor="codigo" className="block text-lg font-medium text-gray-700 mb-2">
          Escribe tu código en C o sube un archivo:
        </label>

        {/* Textarea para escribir código manualmente */}
        <textarea
          id="codigo"
          rows={10}
          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-black"
          value={codigo}
          onChange={(e) => setCodigo(e.target.value)}
          placeholder="Escribe tu código aquí..."
        ></textarea>

        {/* Input para subir un archivo de código */}
        <div className="mt-4">
          <label htmlFor="file-upload" className="block text-lg font-medium text-gray-700">
            O selecciona un archivo .c:
          </label>
          <input
            id="file-upload"
            type="file"
            accept=".c"
            onChange={handleFileChange}
            className="mt-2 text-black"
          />
        </div>

        <button
          type="submit"
          className="mt-4 w-full bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-indigo-500 transition duration-200"
        >
          Analizar código
        </button>
      </form>
      
      <h2 className="text-2xl font-semibold text-gray-800 mt-8">Resultados:</h2>
      <pre className="w-full max-w-lg bg-gray-100 p-4 rounded-lg mt-4 shadow-md whitespace-pre-wrap text-black">
        {resultados}
      </pre>
      
      <h2 className="text-xl font-semibold text-gray-800 mt-4">Número de tokens: {contador}</h2>
    </div>
  );
}
