import { create } from 'zustand';

interface ICreateListingModalStore {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

export const useCreateListingModal = create<ICreateListingModalStore>(
  (set) => ({
    isOpen: false,
    open: () => set({ isOpen: true }),
    close: () => set({ isOpen: false }),
  })
);
