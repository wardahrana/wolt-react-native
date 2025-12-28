import zustandStorage from '@/utils/zustandStorage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export interface UserState {
  isGuest: boolean;
  user: any;
  continueAsGuest: () => void;
  setUser: (user: any) => void;
  logout: () => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      isGuest: false,
      user: null,

      continueAsGuest: () =>
        set({ isGuest: true, user: null }),

      setUser: (user) =>
        set({ isGuest: false, user: user }),

      logout: () =>
        set({ isGuest: false, user: null }),
    }),
    {
      name: 'user-storage',
      storage: createJSONStorage(() => zustandStorage),
    }
  )
);



  
  
  
 