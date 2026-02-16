'use client';

import { ChangeEvent, useState, SubmitEvent } from 'react';

import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc';

import Modal from '@/components/modals/Modal';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { authClient } from '@/lib/auth-client';
import { useAuthModal } from '@/store/useAuthModalStore';

interface IRegisterValues {
  name: string;
  email: string;
  password: string;
}

type RegisterErrors = Partial<Record<keyof IRegisterValues, string>>;

const RegisterModal = () => {
  const { isRegisterOpen, closeRegister, openLogin } = useAuthModal();
  const [values, setValues] = useState<IRegisterValues>({
    name: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState<RegisterErrors>({});
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: undefined,
    }));
  };

  const validate = () => {
    const newErrors: RegisterErrors = {};

    if (!values.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (values.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!values.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!values.password.trim()) {
      newErrors.password = 'Password is required';
    } else if (values.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validate()) return;

    setLoading(true);

    try {
      const { error } = await authClient.signUp.email({
        name: values.name,
        email: values.email,
        password: values.password,
      });

      if (error) {
        toast(error.message as string, {
          style: {
            background: '#FF5A5F',
            color: '#fff',
          },
        });
        return;
      }

      toast('Registration successful!', {
        style: {
          background: '#16a34a',
          color: '#fff',
        },
      });

      setValues({ name: '', email: '', password: '' });
      closeRegister();
      router.refresh();
    } catch (error) {
      console.log(error);
      toast(
        error instanceof Error
          ? error.message
          : 'Something went wrong. Please try again later.',
        {
          style: {
            background: '#FF5A5F',
            color: '#fff',
          },
        }
      );
    } finally {
      setLoading(false);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await authClient.signIn.social({
        provider: 'google',
      });
    } catch {
      toast('Google sign in failed. Please try again later.', {
        style: {
          background: '#FF5A5F',
          color: '#fff',
        },
      });
    }
  };

  return (
    <Modal
      title='Register'
      isOpen={isRegisterOpen}
      onClose={closeRegister}
    >
      {/* Header */}
      <div className='mb-6 space-y-1'>
        <h2 className='text-2xl font-semibold text-gray-900'>
          Welcome to Airbnb
        </h2>
        <p className='text-sm text-gray-500'>Create an account</p>
      </div>

      {/* Form */}
      <form
        onSubmit={onSubmit}
        className='space-y-5'
      >
        <Input
          name='name'
          label='Name'
          type='text'
          value={values.name}
          onChange={handleChange}
          error={errors.name}
        />

        <Input
          name='email'
          label='Email'
          type='email'
          value={values.email}
          onChange={handleChange}
          error={errors.email}
        />

        <Input
          name='password'
          label='Password'
          type='password'
          value={values.password}
          onChange={handleChange}
          error={errors.password}
        />

        <Button
          disabled={loading}
          loading={loading}
          type='submit'
        >
          Continue
        </Button>

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
          onClick={signInWithGoogle}
        >
          Continue with Google
        </Button>

        {/* Footer */}
        <p className='mt-6 text-center text-sm text-gray-500'>
          Already have an account?{' '}
          <span
            onClick={() => openLogin()}
            className='text-primary cursor-pointer font-semibold hover:underline'
          >
            Login
          </span>
        </p>
      </form>
    </Modal>
  );
};

export default RegisterModal;
