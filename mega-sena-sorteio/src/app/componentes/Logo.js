import Image from 'next/image';

const Logo = () => {
  return (
    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
      <Image src="/mega-sena-logo.png" alt="Logo Mega-Sena" width={200} height={100} />
    </div>
  );
};

export default Logo;
