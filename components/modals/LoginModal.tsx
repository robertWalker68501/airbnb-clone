'use client';

import { FcGoogle } from 'react-icons/fc';

import Modal from '@/components/modals/Modal';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { useAuthModal } from '@/store/useAuthModalStore';

const LoginModal = () => {
  const { isLoginOpen, closeLogin, openRegister } = useAuthModal();

  return (
    <Modal
      title='Login'
      isOpen={isLoginOpen}
      onClose={closeLogin}
    >
      {/* Header */}
      <div className='mb-6 space-y-1'>
        <h2 className='text-2xl font-semibold text-gray-900'>
          Welcome to Airbnb
        </h2>
        <p className='text-sm text-gray-500'>Login to your account</p>
      </div>

      {/* Form */}
      <form className='space-y-5'>
        <Input
          name='email'
          label='Email'
          type='email'
          value={''}
          onChange={() => {}}
        />

        <Input
          name='password'
          label='Password'
          type='password'
          value={''}
          onChange={() => {}}
        />

        <Button type='submit'>Continue</Button>

        {/* Divider */}
        <div className='relative my-6'>
          <div className='absolute inset-0 flex items-center'>
            <div className='w-full border-t border-gray-300' />
          </div>
          <div className='relative flex justify-center text-xs uppercase'>
            <span className='bg-white px-4 text-gray-500'>Or</span>
          </div>
        </div>
        <Button
          type='button'
          variant='outline'
          icon={<FcGoogle size={22} />}
        >
          Continue with Google
        </Button>

        {/* Footer */}
        <p className='mt-6 text-center text-sm text-gray-500'>
          Don&apos;t have an account?{' '}
          <span
            onClick={() => openRegister()}
            className='text-primary cursor-pointer font-semibold hover:underline'
          >
            Register
          </span>
        </p>
      </form>
    </Modal>
  );
};

export default LoginModal;
