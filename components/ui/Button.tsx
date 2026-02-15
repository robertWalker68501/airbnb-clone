import { ButtonHTMLAttributes, ReactNode } from 'react';

import clsx from 'clsx';

type ButtonVariant = 'primary' | 'outline';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  loading?: boolean;
  icon?: ReactNode;
  rounded?: boolean;
}

const Button = ({
  children,
  variant = 'primary',
  loading,
  icon,
  rounded = false,
  disabled,
  className,
  ...props
}: ButtonProps) => {
  const isDisabled = disabled || loading;

  return (
    <button
      disabled={disabled}
      {...props}
      className={clsx(
        `flex h-12 w-full cursor-pointer items-center justify-center gap-3 font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2`,
        rounded ? 'rounded-full' : 'rounded-lg',
        variant === 'primary' &&
          'bg-linear-to-r from-rose-500 to-pink-500 text-white hover:from-rose-600 hover:to-pink-600 active:scale-[0.98]',
        variant === 'outline' &&
          'border border-gray-300 bg-white text-gray-800 hover:bg-gray-100',
        isDisabled && 'cursor-not-allowed opacity-70',
        className
      )}
    >
      {icon}
      {loading ? 'Loading...' : children}
    </button>
  );
};

export default Button;
