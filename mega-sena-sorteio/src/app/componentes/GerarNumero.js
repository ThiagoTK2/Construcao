import { useState } from 'react';

const GerarNumero = () => {
  const [numero, setNumero] = useState(null);

  const gerarNumeroAleatorio = () => {
    const numeroAleatorio = Math.floor(Math.random() * 60) + 1;
    setNumero(numeroAleatorio);
  };

  return (
    <div style={{ textAlign: 'center', margin: '10px' }}>
      <button onClick={gerarNumeroAleatorio}>Gerar Número</button>
      {numero !== null && <p>Número sorteado: {numero}</p>}
    </div>
  );
};

export default GerarNumero;
