import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
// import { createRoot } from 'react-dom/client'; // <- Não precisa disso no App.jsx

// Confirme se o caminho está certo (se ThemeContext.jsx está na mesma pasta do App)
import { ThemeProvider } from './ThemeContext'; 

// CORREÇÃO 1: Nome do arquivo 'Pagina' e Import com Letra Maiúscula
import Pagina from './components/Pagina'; 

function App() {
  return (
    <ThemeProvider>
       {/* CORREÇÃO 2: Componente com Letra Maiúscula */}
       <Pagina />
    </ThemeProvider>
  );
}

export default App;