interface InputFieldProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export default function InputField({ type, placeholder, value, onChange, className = '' }: InputFieldProps) {
  return (
    <input
      className={`p-2 border border-gray-300 rounded w-full ${className}`}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}
