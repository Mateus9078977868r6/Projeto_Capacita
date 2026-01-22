import { createContext, useState } from 'react';
export const ThemeContext = createContext();
export function ThemeProvider({ children }) {
    const [tema, setTema] = useState('light');
    const alternarTema = () => {
        setTema((temaAtual) => (temaAtual === 'light' ? 'dark' : 'light'));
    };
    return (
        <ThemeContext.Provider value={{ tema, alternarTema }}>
            {children}
        </ThemeContext.Provider>
    );
}