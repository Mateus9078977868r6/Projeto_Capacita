# 🚀 Jornada de Aprendizado: Do JavaScript ao React

Bem-vindo ao repositório da minha jornada de estudos! Este projeto é um compilado de todos os desafios e sistemas que construí enquanto avançava desde os fundamentos de introdução ao JavaScript, HTML e CSS, programação orientada a objetos, até a criação de interfaces modernas com React e Context API.

## 🎯 Objetivo do Projeto
Registrar a evolução do aprendizado contínuo, saindo de scripts rodando no console para aplicações Web interativas (Single Page Applications) utilizando as melhores práticas do mercado.

---

## 🛠️ Tecnologias Utilizadas
* **HTML/CSS**: Estruturação e estilização básica em linha.
* **JavaScript (ES6+)**: Funções, Arrays, Métodos (map, filter, forEach), Classes, Herança, Encapsulamento.
* **React JS**: Componentes Funcionais, JSX, Props.
* **React Hooks**: `useState`, `useContext`.
* **Vite**: Ferramenta de build para desenvolvimento rápido em React.

---

## 🗺️ O Caminho (Módulos)

### 1. Fundamentos de JavaScript e Lógica 
* **Calculadora:** Criação de funções matemáticas modulares (`somar`, `sub`, `multi`, `div`) e controle de fluxo com retornos adequados.
* **Correção de Tipos:** Resolução de problemas clássicos do JS, como soma de Arrays com Numbers (evitando o temido `NaN`).

### 2. HTML e CSS
* **HTML Semântico:** Estruturação de páginas web utilizando tags com significado (como `<header>`, `<main>`, `<section>`), focando em acessibilidade e organização lógica do conteúdo.
* **Modelo de Caixa (Box Model):** Compreensão da estrutura base do CSS, manipulando o conteúdo, preenchimento (`padding`), bordas (`border`) e margens (`margin`) para criar o layout.
* **Layouts Modernos:** Utilização de ferramentas como Flexbox e CSS Grid para criar interfaces responsivas e alinhar elementos de forma eficiente na tela.

### 3. Programação Orientada a Objetos (POO) 
* **Sistema de Pessoa:** Entendimento profundo do método `constructor` e como instanciar objetos com `new`.
* **Conta Bancária Interativa:** Criação de uma classe `Conta_Bancaria` com atributos privados (`#saldo`, `#entradas`, `#saidas`), métodos de depósito e saque, e um menu interativo com `prompt` rodando em um loop `while`.
* **Sistema de Animais (Herança e Polimorfismo):** Classes filhas (`Cachorro`, `Gato`, `Passaro`) herdando da classe pai `Animal`. Utilização do método `super()` e sobrescrita de métodos para emitir sons específicos.
* **Gestão de Empresa e Departamentos:** Composição de objetos, onde uma classe `Empresa` gerencia um Array de objetos `Departamento` (ex: T.I, R.H, Finanças).

### 4. Mergulho no React (Básico ao Avançado) 
* **Componente RecipeCard:** Criação do primeiro componente React (Bolo de Cenoura), entendendo como injetar variáveis no JSX e como renderizar listas de ingredientes e passos usando a função `.map()`.
* **Entendendo o Virtual DOM:** Compreensão teórica de como o React atualiza a tela de forma super eficiente comparando um "rascunho" com a tela real.
* **Gestão de Estado (`useState`):** Substituição do uso problemático de `prompt()` (que trava o Virtual DOM e o Strict Mode) por formulários controlados pelo React. Criação de um sistema de Login com validação em tempo real.
* **Context API (Tema Claro/Escuro):** Resolução do problema de *Prop Drilling*. Criação de um `ThemeContext` e um `ThemeProvider` para alternar as cores do site inteiro através de um único botão, distribuindo o estado de forma global.

---
