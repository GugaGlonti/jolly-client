interface ButtonProps {
  text: string;
  onClick: () => void;
  className?: string;
}

export default function Button({ text, onClick, className = '' }: ButtonProps) {
  return (
    <button
      className={`${className} px-4 py-2 bg-blue-500 rounded-md`}
      onClick={onClick}>
      <p>{text}</p>
    </button>
  );
}
