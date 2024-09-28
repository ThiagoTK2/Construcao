import Logo from '../componentes/Logo';

const Sorteio = () => {
  const gerarSorteioCompleto = () => {
    let numerosSorteados = [];
    while (numerosSorteados.length < 6) {
      const numeroAleatorio = Math.floor(Math.random() * 60) + 1;
      if (!numerosSorteados.includes(numeroAleatorio)) {
        numerosSorteados.push(numeroAleatorio);
      }
    }
    return numerosSorteados.sort((a, b) => a - b);
  };

  const numeros = gerarSorteioCompleto();

  return (
    <div style={{ textAlign: 'center' }}>
      <Logo />
      <h1>Números Sorteados da Mega-Sena</h1>
      <div style={{ marginTop: '20px' }}>
        {numeros.map((numero, index) => (
          <p key={index} style={{ fontSize: '24px' }}>{numero}</p>
        ))}
      </div>
    </div>
  );
};

export default Sorteio;
