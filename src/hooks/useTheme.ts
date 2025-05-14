import { useEffect, useLayoutEffect, useState } from 'react';

const THEME_KEY = 'theme';

type Theme = 'light' | 'dark';

const getInitialTheme = (): Theme => {
  if (typeof window !== 'undefined') {
    const storedTheme = localStorage.getItem(THEME_KEY);
    return storedTheme === 'dark' ? 'dark' : 'light';
  }
  return 'light';
};

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>('light');
  const [isMounted, setIsMounted] = useState(false);

  useLayoutEffect(() => {
    const initial = getInitialTheme();
    setTheme(initial);
    const root = window.document.documentElement;
    root.classList.toggle('dark', initial === 'dark');
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const root = window.document.documentElement;

    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    localStorage.setItem(THEME_KEY, theme);
  }, [theme, isMounted]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return { theme, toggleTheme };
};
