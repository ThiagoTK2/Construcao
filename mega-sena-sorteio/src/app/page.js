import Link from 'next/link';
import Logo from '../components/Logo';

export default function Home() {
  return (
    <div style={{ textAlign: 'center' }}>
      <Logo />
      <h1>Bem-vindo ao Sorteio da Mega-Sena!</h1>
      <Link href="/sorteio">
        <a style={{ fontSize: '20px', marginTop: '20px', display: 'block' }}>Ir para o Sorteio</a>
      </Link>
    </div>
  );
}
