'use client';

import { useRouter } from 'next/navigation';

import { Heading, HeadingSubtitle, HeadingTitle } from '../header';
import styles from './empty-state.module.css';

export interface EmptyStateProps {
  title?: string;
  subtitle?: string;
  showReset?: boolean;
  label?: string;
  reset?: () => void;
}

const EmptyState = ({
  title = 'Aconteceu um problema!',
  subtitle = 'Não sei ainda o que é, mas vou descobrir!',
  label = 'Tente novamente',
  showReset,
  reset
}: EmptyStateProps) => {
  const router = useRouter();

  return (
    <div className={styles.emptyState_content}>
      <Heading center>
        <HeadingTitle>{title}</HeadingTitle>
        <HeadingSubtitle>{subtitle}</HeadingSubtitle>
      </Heading>
      <div className={styles.emptyState_buttons}>
        {showReset && <button onClick={() => reset && reset()}>{label}</button>}
        <button onClick={() => router.back()}>Voltar</button>
      </div>
    </div>
  );
};

export default EmptyState;
