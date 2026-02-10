import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import styles from './Card.module.css'; 

function Card() {
    return (
        // Em vez de class="card", usamos className={styles.card}
        <div className={styles.card}>
            
            <img 
                className={styles.imagem} 
                src="https://img.freepik.com/fotos-gratis/banana-fresca-isolada_144627-26867.jpg" 
                alt="Medico" 
            />
            
            <h2 className={styles.titulo}>Estudante de Medicina</h2>
            
            <p>
                Esta é uma descrição para o exercício 1.
            </p>
            
        </div>
    );
}

export default Card
