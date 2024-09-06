interface ButtonProps {
  text: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  className?: string;
}

export default function Button({ text, type = 'button', onClick, className = '' }: ButtonProps) {
  return (
    <button
      type={type}
      className={`${className} px-4 py-2 bg-blue-500 rounded-md`}
      onClick={onClick}>
      <p>{text}</p>
    </button>
  );
}
