import { overrideTailwindClasses } from 'tailwind-override';

interface ButtonProps {
  children: React.ReactNode;
  classNames?: string;
  buttonType?: 'submit' | 'button' | 'reset';
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

export default function Button({
  children,
  buttonType,
  onClick,
  classNames,
}: ButtonProps) {
  return (
    <button
      onClick={onClick ? (e) => onClick(e) : undefined}
      type={buttonType ? buttonType : 'button'}
      className={overrideTailwindClasses(
        `bg-green-600 hover:bg-green-800 ${classNames}`
      )}
    >
      {children}
    </button>
  );
}
