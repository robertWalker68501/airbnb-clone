import { ChangeEvent } from 'react';
import { TbPhotoPlus } from 'react-icons/tb';
import Image from 'next/image';

interface IImageUpload {
  preview: string | null;
  onChange: (file: File) => void;
}

const ImageUpload = ({ preview, onChange }: IImageUpload) => {
  const handleUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    onChange(file);
  };
  return (
    <div className='relative w-full'>
      <label
        htmlFor='image-upload'
        className='relative flex min-h-80 cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-gray-300 p-10 text-gray-600 transition hover:text-gray-400'
      >
        {!preview && (
          <>
            <TbPhotoPlus size={36} />
            <p className='font-medium'>Click to upload</p>
            <p className='text-sm text-gray-400'>Upload one image</p>
          </>
        )}

        {preview && (
          <Image
            src={preview}
            alt='preview'
            fill
            className='rounded-2xl object-cover'
          />
        )}
      </label>
      <input
        id='image-upload'
        type='file'
        accept='image/*'
        className='hidden'
        onChange={handleUpload}
      />
    </div>
  );
};

export default ImageUpload;
