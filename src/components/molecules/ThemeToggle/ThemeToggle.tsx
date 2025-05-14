import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center h-full w-[48px] cursor-pointer"
      aria-label="Toggle Theme"
    >
      {theme === 'dark' ? (
        <Sun className="text-yellow-400 w-5 h-5 transition-colors hover:text-yellow-300" />
      ) : (
        <Moon className="text-blue-400 w-5 h-5 transition-colors hover:text-blue-300" />
      )}
    </button>
  );
};
