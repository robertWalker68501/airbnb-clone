import {
  ChangeEventHandler,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
} from 'react';

import clsx from 'clsx';

interface BaseProps {
  label: string;
  error?: string;
  as?: 'input' | 'textarea';
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

type InputProps = BaseProps & InputHTMLAttributes<HTMLInputElement>;

type TextAreaProps = BaseProps & TextareaHTMLAttributes<HTMLTextAreaElement>;

const Input = ({
  label,
  error,
  name,
  value,
  as = 'input',
  className,
  onChange,
  ...props
}: InputProps | TextAreaProps) => {
  const hasValue = value !== '' && value !== null && value !== undefined;

  const sharedClasses = clsx(
    `
      peer
      w-full
      border
      bg-white
      px-4
      text-sm
      transition
      outline-none
      focus:border-2
      disabled:opacity-70
      text-gray-500
    `,
    error
      ? 'border-red-500 focus:border-red-500'
      : 'border-gray-400 focus:border-black',
    as === 'textarea'
      ? 'min-h-[120px] resize-none rounded-xl pt-6 pb-3'
      : 'h-14 rounded-xl pt-6',
    className
  );

  return (
    <div className='w-full'>
      <div className='relative'>
        {as === 'textarea' ? (
          <textarea
            className={sharedClasses}
            name={name}
            value={value}
            placeholder=' '
            onChange={onChange}
            {...(props as TextareaHTMLAttributes<HTMLTextAreaElement>)}
          />
        ) : (
          <input
            className={sharedClasses}
            name={name}
            value={value}
            placeholder=' '
            onChange={onChange}
            {...(props as InputHTMLAttributes<HTMLInputElement>)}
          />
        )}
        <label
          htmlFor={name}
          className={clsx(
            `pointer-events-none absolute top-4 left-4 origin-left text-sm text-gray-500 transition-all duration-200`,
            hasValue
              ? '-translate-y-3 scale-75 text-gray-700'
              : 'peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:text-gray-700'
          )}
        >
          {label}
        </label>
      </div>
      {error && <p className='mt-1 text-xs text-red-500'>{error}</p>}
    </div>
  );
};

export default Input;
