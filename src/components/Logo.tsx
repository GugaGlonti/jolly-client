import { useNavigate } from 'react-router';

interface LogoProps {
  height?: string;
  className?: string;
}

export default function Logo({ height = '', className = '' }: LogoProps) {
  const navigate = useNavigate();

  return (
    <img
      onClick={() => navigate('/')}
      src='https://placeholderlogo.com/img/placeholder-logo-1.png'
      height={height}
      className={`cursor-pointer ${className}`}
    />
  );
}
