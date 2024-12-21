'use client';
import { useMediaQuery } from '@/hooks/useMediaQuery';

const ExampleComponent: React.FC = () => {
  const isLargeScreen = useMediaQuery('(min-width: 1024px)');

  return (
    <div>
      {isLargeScreen ? (
        <p>Você está em uma tela grande (largura {'>'} 1024px)!</p>
      ) : (
        <p>Você está em uma tela pequena!</p>
      )}
    </div>
  );
};

export default ExampleComponent;
