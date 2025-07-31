import { FiMoon, FiSun } from 'react-icons/fi';
import { useTheme } from './theme-context';

// Use named export instead of default export
export const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-all duration-300 hover:scale-110"
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {darkMode ? (
        <FiSun className="w-5 h-5 text-yellow-400" />
      ) : (
        <FiMoon className="w-5 h-5 text-gray-800" />
      )}
    </button>
  );
};

// Optionally add a default export if needed
export default ThemeToggle;