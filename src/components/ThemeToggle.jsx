import { useTheme } from './ThemeContext';

export function ThemeToggle(props) {
  const { theme, toggleTheme } = useTheme();

  return (
    <label onClick={toggleTheme} className={theme} >
        {props.children}
    </label>
  );
};