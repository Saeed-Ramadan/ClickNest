import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AppState {
  theme: 'dark' | 'light';
  language: 'en' | 'ar';
  isMobileMenuOpen: boolean;
  toggleTheme: () => void;
  setLanguage: (lang: 'en' | 'ar') => void;
  toggleMobileMenu: (open?: boolean) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      theme: 'dark',
      language: 'en',
      isMobileMenuOpen: false,
      toggleTheme: () => 
        set((state) => ({ theme: state.theme === 'dark' ? 'light' : 'dark' })),
      setLanguage: (lang) => set({ language: lang }),
      toggleMobileMenu: (open) => 
        set((state) => ({ isMobileMenuOpen: open ?? !state.isMobileMenuOpen })),
    }),
    {
      name: 'clicknest-storage',
    }
  )
);
