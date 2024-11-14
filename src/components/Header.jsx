import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext'; // Importujemy ThemeContext.

function Header() {
  // 1. Pobieramy `isDarkMode` i `toggleTheme` z kontekstu za pomocą `useContext`.
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <header
      style={{
        backgroundColor: isDarkMode ? '#333' : '#eee', // Kolor tła zmienia się w zależności od tematu.
        color: isDarkMode ? '#fff' : '#000', // Kolor tekstu zmienia się w zależności od tematu.
        padding: '10px',
        textAlign: 'center'
      }}
    >
      <h1>Tryb {isDarkMode ? 'Ciemny' : 'Jasny'}</h1>
      {/* Przycisk do przełączania tematu */}
      <button onClick={toggleTheme}>
        Zmień na {isDarkMode ? 'Jasny' : 'Ciemny'} Tryb
      </button>
    </header>
  );
}

export default Header;
