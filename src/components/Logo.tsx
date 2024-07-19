interface LogoProps {
  className?: string;
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <img
      src='https://placeholderlogo.com/img/placeholder-logo-1.png'
      className={className}
    />
  );
}
