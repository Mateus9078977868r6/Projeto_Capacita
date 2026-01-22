import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import BotaoSeletor from '../BotaoSeletor';

function Pagina() {
    const { tema } = useContext(ThemeContext);

    return (
        <div style={{
            backgroundColor: tema === 'light' ? '#FFF' : '#333',
            color: tema === 'light' ? '#000' : '#FFF',
            height: '100vh', 
            padding: '20px',
            transition: 'all 0.5s' 
        }}>
            <h1>Tema Atual: {tema.toUpperCase()}</h1>
            <p>Veja como o fundo mudou sem eu passar props!</p>
            
            {/* Colocamos o botão aqui dentro */}
            <BotaoSeletor />
        </div>
    );
}

export default Pagina;