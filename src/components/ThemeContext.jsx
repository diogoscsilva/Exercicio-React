import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem('theme')
    return storedTheme || 'light'
  });

  useEffect(() => {
    localStorage.setItem('theme', theme)
    document.getElementById('root').className = theme
  }, [theme])

  const toggleTheme = () => {
    setTheme(currentTheme => (currentTheme === 'light' ? 'dark' : 'light'))
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext)
};