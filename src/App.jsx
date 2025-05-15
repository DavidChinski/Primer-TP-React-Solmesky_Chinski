import { useState } from 'react';
import './App.css';
import Formulario from './componentes/form';
import './componentes/form.css';
import Cards from './componentes/cards';
import './componentes/cards.css';

function App() {
  const [citas, setCitas] = useState([]);

  return (
    <>
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div className='container'>
        <div className='row'>
          <div className='one-half column'>
            <Formulario setCitas={setCitas} citas={citas} />
          </div>
          <div className='one-half column'>
            <Cards citas={citas} setCitas={setCitas} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
