import { InputHTMLAttributes } from 'react';

type InputProps = {
  ref?: React.Ref<HTMLInputElement> | null;
  error_message?: string;
} & InputHTMLAttributes<HTMLInputElement>;

/* Ref agora é passada como props, nao precisa do fowardRef */
export const Input = ({ name, error_message, ref, ...props }: InputProps) => {
  return (
    <>
      <input {...props} name={name} ref={ref} />
      {error_message && <p>{error_message}</p>}
    </>
  );
};
