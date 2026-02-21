import { ReactNode } from 'react';

import { LuX } from 'react-icons/lu';

interface IModal {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

const Modal = ({ isOpen, onClose, title, children }: IModal) => {
  return (
    <div
      aria-hidden={!isOpen}
      className={`fixed inset-0 z-50 flex items-center justify-center px-4 transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/30 transition-all duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
      />

      {/* Modal */}
      <div
        className={`relative z-10 w-full max-w-lg transform rounded-2xl bg-white shadow-2xl transition-all duration-500 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
      >
        {/* Header */}
        <div className='flex items-center justify-between border-b border-gray-300 px-6 py-4'>
          <h2 className='text-lg font-semibold text-gray-900'>{title}</h2>
          <button
            type='button'
            aria-label='Close Modal'
            onClick={onClose}
            className='cursor-pointer rounded-full p-2 transition hover:bg-gray-100'
          >
            <LuX size={18} />
          </button>
        </div>

        {/* Content */}
        <div className='px-6 py-5'>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
