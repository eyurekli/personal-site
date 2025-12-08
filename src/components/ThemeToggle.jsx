import { useTheme } from '../contexts/ThemeContext';
import './../styles/ThemeToggle.css';

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
            <span className="theme-icon" aria-hidden="true">
                {isDark ? '☀️' : '🌙'}
            </span>
            <span className="sr-only">
                {isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            </span>
        </button>
    );
}

