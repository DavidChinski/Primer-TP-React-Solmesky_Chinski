import Cita from "./cita";
import Titulo from "./titulo";
function Cards() {
  const citas = [
    {
      id: 1,
      mascota: "Nina",
      dueño: "Martin",
      fecha: "2021-08-05",
      hora: "08:20",
      sintomas: "Le duele la pierna",
    },
    {
      id: 2,
      mascota: "Sifon",
      dueño: "Flecha",
      fecha: "2023-08-05",
      hora: "09:24",
      sintomas: "Duerme mucho",
    },
    {
      id: 3,
      mascota: "Floki",
      dueño: "Ari",
      fecha: "2023-08-05",
      hora: "16:15",
      sintomas: "No está comiendo",
    },
  ];
  const eliminarCita = (id) => {
    alert(`Cita con ID ${id} eliminada`); 
  };

  return (
    <div>
    <Titulo texto="Administra tus citas" />
      {citas.map((cita) => (
        <Cita
          key={cita.id}
          mascota={cita.mascota}
          dueño={cita.dueño}
          fecha={cita.fecha}
          hora={cita.hora}
          sintomas={cita.sintomas}
          onEliminar={() => eliminarCita(cita.id)} 
        />
      ))}
    </div>
  );
}

export default Cards;
