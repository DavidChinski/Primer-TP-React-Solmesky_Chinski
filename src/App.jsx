import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Formulario from './componentes/form'
import Cards from './componentes/cards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Formulario/>
    <Cards/>
    </>
  )
}

export default App
