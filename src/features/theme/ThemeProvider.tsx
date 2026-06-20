'use client';

import {
  createContext,
  useContext,
  useEffect,
  useSyncExternalStore,
  type ReactNode,
} from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Global theme state management using useSyncExternalStore for SSR compatibility
let currentTheme: Theme = 'light';
const listeners = new Set<() => void>();
let isInitialized = false;

function readTheme(): Theme {
  if (typeof window === 'undefined') {
    return currentTheme;
  }

  if (!isInitialized) {
    const storedTheme = localStorage.getItem('theme') as Theme | null;
    currentTheme =
      storedTheme ??
      (window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light');
    isInitialized = true;
  }

  return currentTheme;
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function setStoredTheme(theme: Theme) {
  currentTheme = theme;
  if (typeof window !== 'undefined') {
    localStorage.setItem('theme', theme);
  }
  for (const listener of listeners) {
    listener();
  }
}

const getServerSnapshot = (): Theme => 'light';
// ================================================================

export function ThemeProvider({ children }: { children: ReactNode }) {
  const theme = useSyncExternalStore(subscribe, readTheme, getServerSnapshot);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    root.style.colorScheme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setStoredTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}
