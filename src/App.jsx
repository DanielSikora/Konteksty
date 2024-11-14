import React from 'react';
import { ThemeProvider } from './components/ThemeContext'; // Importujemy ThemeProvider.
import Header from './components/Header'; // Importujemy komponent Header.
import Content from './components/Content'; // Importujemy komponent Content.

function App() {
  return (
    // Opakowujemy całą aplikację w `ThemeProvider`, aby każdy komponent miał dostęp do kontekstu.
    <ThemeProvider>
      <div className="App">
        <Header />
        <Content />
      </div>
    </ThemeProvider>
  );
}

export default App;
