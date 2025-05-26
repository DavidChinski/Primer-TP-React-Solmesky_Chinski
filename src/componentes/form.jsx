import { useState } from "react";
import Titulo from "./titulo";

function Formulario({ agregarCita}) {
  const [formulario, setFormulario] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: ""
  });

  function actualizarFormulario(nombreCampo, valorCampo) {
    const nuevoFormulario = { ...formulario };
    nuevoFormulario[nombreCampo] = valorCampo;
    setFormulario(nuevoFormulario);
  }

  function agregar() {
    if (Object.values(formulario).some(valor => valor === "")) {
      alert("completar los camposs");
      return;
    }

    agregarCita(formulario);
    setFormulario({
      mascota: "",
      propietario: "",
      fecha: "",
      hora: "",
      sintomas: ""
    });
  }

  return (
    <div>
      <Titulo texto="Crear mi Cita" />
      <form>
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre Mascota"
          value={formulario.mascota}
          onChange={(input) => actualizarFormulario("mascota", input.target.value)}
        />
        <label>Nombre Dueño</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre dueño de la mascota"
          value={formulario.propietario}
          onChange={(input) => actualizarFormulario("propietario", input.target.value)}
        />
        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          value={formulario.fecha}
          onChange={(input) => actualizarFormulario("fecha", input.target.value)}
        />
        <label>Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          value={formulario.hora}
          onChange={(input) => actualizarFormulario("hora", input.target.value)}
        />
        <label>Sintomas</label>
        <textarea
          name="sintomas"
          className="u-full-width"
          value={formulario.sintomas}
          onChange={(input) => actualizarFormulario("sintomas", input.target.value)}
        ></textarea>
        <button
          type="button"
          className="u-full-width button-primary"
          onClick={agregar}
        >
          Agregar Cita
        </button>
      </form>
    </div>
  );
}

export default Formulario;
