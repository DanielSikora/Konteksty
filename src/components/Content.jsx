import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext'; // Importujemy ThemeContext.

function Content() {
  // 1. Pobieramy `isDarkMode` z kontekstu za pomocą `useContext`.
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: isDarkMode ? '#555' : '#fff', // Kolor tła zmienia się w zależności od tematu.
        color: isDarkMode ? '#ddd' : '#333', // Kolor tekstu zmienia się w zależności od tematu.
        padding: '20px',
        minHeight: '200px',
        textAlign: 'center'
      }}
    >
      <p>To jest przykładowa zawartość aplikacji.</p>
      <p>Aktualnie wybrany tryb: {isDarkMode ? 'Ciemny' : 'Jasny'}</p>
    </div>
  );
}

export default Content;
