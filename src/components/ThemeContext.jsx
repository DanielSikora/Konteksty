import React, { createContext, useState } from 'react';

// 1. Tworzymy kontekst za pomocą `createContext`.
export const ThemeContext = createContext();

// 2. Tworzymy komponent `ThemeProvider`, który opakowuje aplikację i zarządza stanem tematu.
export function ThemeProvider({ children }) {
  // 3. Definiujemy stan dla tematu: `isDarkMode` (początkowo `false` dla jasnego trybu).
  const [isDarkMode, setIsDarkMode] = useState(false);

  // 4. Funkcja przełączająca temat (ciemny/jasny).
  const toggleTheme = () => setIsDarkMode(prevMode => !prevMode);

  return (
    // 5. Przekazujemy wartości `isDarkMode` i `toggleTheme` jako wartość kontekstu.
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children} {/* 6. Opakowane dzieci, które mają dostęp do kontekstu. */}
    </ThemeContext.Provider>
  );
}
