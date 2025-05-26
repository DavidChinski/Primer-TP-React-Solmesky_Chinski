import { useEffect, useState } from "react";
import "./App.css";
import Formulario from "./componentes/form";
import "./componentes/form.css";
import Cards from "./componentes/cards";
import "./componentes/cards.css";

function App() {
  const [citas, setCitas] = useState([]);

  useEffect(() => {
    const citasGuardadas = localStorage.getItem("citas");
    if (citasGuardadas) {
      setCitas(JSON.parse(citasGuardadas));
    }
  }, []);

  const agregarCita = (nuevaCita) => {
    const nuevasCitas = [...citas, nuevaCita];
    setCitas(nuevasCitas);
    localStorage.setItem("citas", JSON.stringify(nuevasCitas));
  };

  return (
    <>
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario agregarCita={agregarCita} citas={citas} />
          </div>
          <div className="one-half column">
            <Cards citas={citas} setCitas={setCitas} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
