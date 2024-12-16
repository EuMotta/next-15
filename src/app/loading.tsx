import { AiOutlineLoading } from 'react-icons/ai';

export default function Loading() {
  return (
    <div className="flex h-screen items-center justify-center">
      <span className="animate-spin">
        <AiOutlineLoading size={50} />
      </span>
    </div>
  );
}
