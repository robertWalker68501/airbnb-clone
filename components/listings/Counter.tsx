import { LuMinus, LuPlus } from 'react-icons/lu';

interface ICounter {
  title: string;
  subtitle: string;
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
}

const Counter = ({
  title,
  subtitle,
  value,
  onChange,
  min = 1,
  max = 20,
}: ICounter) => {
  const increase = () => {
    if (value < max) onChange(value + 1);
  };

  const decrease = () => {
    if (value > min) onChange(value - 1);
  };

  const sharedClasses =
    'flex size-8 items-center justify-center rounded-full border border-gray-300 transition hover:border-black disabled:cursor-not-allowed disabled:opacity-30';

  return (
    <div className='flex items-center justify-between gap-8 border-b py-8 last:border-b-0'>
      <div>
        <p className='font-semibold text-gray-900'>{title}</p>
        <p className='text-sm text-gray-500'>{subtitle}</p>
      </div>

      <div className='flex items-center gap-4'>
        <button
          onClick={decrease}
          disabled={value === min}
          className={sharedClasses}
        >
          <LuMinus size={16} />
        </button>

        <span className='w-6 text-center font-medium text-gray-600'>
          {value}
        </span>

        <button
          onClick={increase}
          disabled={value === max}
          className={sharedClasses}
        >
          <LuPlus size={16} />
        </button>
      </div>
    </div>
  );
};

export default Counter;
