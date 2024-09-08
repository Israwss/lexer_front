export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { codigo } = req.body;
  
      // Aquí es donde llamas a tu lexer. Podrías usar una API en Python o ejecutar el lexer desde Node.js
      const resultados = analizarCodigoC(codigo);
  
      res.status(200).json({ resultados });
    } else {
      res.status(405).json({ message: 'Método no permitido' });
    }
  }
  
  // Esta función simula el análisis del código. Aquí llamaría a tu lexer real.
  function analizarCodigoC(codigo) {
    // Lógica para analizar el código en C (esta es una simulación)
    if (codigo.includes('int')) {
      return "Se encontró una declaración de variable de tipo entero.";
    } else if (codigo.includes('for')) {
      return "Se encontró una estructura de control 'for'.";
    } else {
      return "Análisis completado.";
    }
  }
  