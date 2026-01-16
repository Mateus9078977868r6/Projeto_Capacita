import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Car from './components/Car.jsx';
import Computer from './components/Computer.jsx';
import { useState } from 'react';
import { createRoot } from 'react-dom/client';

function App() {
  let x = "I5"
  return (
    <>
      <Car brand="Ford" model="Mustang" color="red" year={1969} />
    </>
  )
}
export default App;

function FavoriteColor() {

  const [color, setColor] = useState("red");

  return <h1>My favorite color is {color}!</h1>

}


createRoot(document.getElementById('root')).render(

  <FavoriteColor />

);

<button

  type="button"

  onClick={() => setColor("blue")}

>Blue</button>