import './App.css'
import Formulario from './componentes/form'
import './componentes/form.css'
import Cards from './componentes/cards'
import './componentes/cards.css'
function App() {
  return (
    <>
    <h1>ADMINISTRADOR DE PACIENTES</h1>
    <div className='container'>
      <div className='row'>
        <div className='one-half column'>
        <Formulario/>
        </div>
        <div className='one-half column'>
        <Cards/>

        </div>
      </div>
    </div>
    </>
  )
}

export default App
