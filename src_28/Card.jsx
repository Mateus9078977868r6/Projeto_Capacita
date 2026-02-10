import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import styles from './Card.module.css'; 

import styled from 'styled-components'; // Importação obrigatória

// 1. Criamos o "Container" (antiga div.card)
// Note o uso das crases (`) para escrever o CSS
const CardContainer = styled.div`
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 16px;
    width: 250px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    background-color: white;
    text-align: center;
    transition: transform 0.2s;

    &:hover {
        transform: translateY(-5px);
    }
`;

// 2. Criamos o "Titulo" (antigo h2)
const Titulo = styled.h2`
    color: #333;
    font-size: 1.5rem;
    margin: 10px 0;
`;

// 3. Criamos a "Imagem" (antiga img)
const ImagemProduto = styled.img`
    width: 100%;
    border-radius: 4px;
    object-fit: cover;
`;

// 4. Criamos o componente React final
function Card() {
    return (
        // Note que não usamos mais "className", nem "div", nem "h2"
        // Usamos os componentes que criamos acima
        <CardContainer>
            <ImagemProduto src="https://via.placeholder.com/150" alt="Produto" />
            <Titulo>Nome do Produto</Titulo>
            <p>Descrição curta do produto feita com Styled Components.</p>
        </CardContainer>
    );
}

export default Card;