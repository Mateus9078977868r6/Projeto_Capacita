import { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';


function Login() {
  const [email, setEmail] = useState("");
  const [erro, setErro] = useState(null);

  const handleSubmit = (evento) => {
    evento.preventDefault();
    if (!email) {
      setErro("Preencha o campo!");
      return;
    }
    if (!email.includes("@") || !email.includes(".")) {
      setErro("Digite um email válido.");
      return;
    }
    setErro(null); 
    alert("Login realizado com sucesso! Bem-vindo " + email);

  };

  return <h1>I've rendered {count} times!</h1>;
}

createRoot(document.getElementById('root')).render(
  <Timer />
);
export default Login;
