function Cita({ mascota, dueño, fecha, hora, sintomas, onEliminar }) {
  return (
    <div className="cita">
      <p>Mascota: <span>{mascota}</span></p>
      <p>Dueño: <span>{dueño}</span></p>
      <p>Fecha: <span>{fecha}</span></p>
      <p>Hora: <span>{hora}</span></p>
      <p>Sintomas: <span>{sintomas}</span></p>
      <button className="button eliminar u-full-width" onClick={onEliminar}>Eliminar ×</button>
    </div>
  );
}

export default Cita;
