import { create } from "zustand";

type RegisterSuccess = {
  registerSuccess: boolean;
  toggleRegisterSuccess: (state?: boolean) => void;
};

export const useRegisterSuccess = create<RegisterSuccess>((set) => ({
  registerSuccess: false,
  toggleRegisterSuccess: () =>
    set((state) => ({ registerSuccess: !state.registerSuccess })),
}));
