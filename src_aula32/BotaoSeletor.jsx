import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
function BotaoSeletor() {
    const { tema, alternarTema } = useContext(ThemeContext);

    return (
        <button onClick={alternarTema}>
            Mudar para tema {tema === 'light' ? 'Escuro' : 'Claro'}
        </button>
    );
}

export default BotaoSeletor;