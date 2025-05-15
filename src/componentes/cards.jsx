import Cita from "./cita";
import Titulo from "./titulo";

function Cards({ citas, setCitas }) {
  function eliminar(citaAEliminar) {
    const nuevasCitas = [];
    for (let i = 0; i < citas.length; i++) {
      if (citas[i] !== citaAEliminar) {
        nuevasCitas.push(citas[i]);
      }
    }
    setCitas(nuevasCitas);
  }

  return (
    <div>
      <Titulo texto="Administra tus Citas" />
      {citas.map((cita, index) => (
        <Cita
          key={index}
          mascota={cita.mascota}
          dueño={cita.propietario}
          fecha={cita.fecha}
          hora={cita.hora}
          sintomas={cita.sintomas}
          onEliminar={() => eliminar(cita)}
        />
      ))}
    </div>
  );
}

export default Cards;
