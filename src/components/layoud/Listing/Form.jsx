function Form({ setFilterText }) {
  // Funciones manejadoras de eventos
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  const handleInputFilter = (ev) => {
    //console.log(ev.target.value);
    setFilterText(ev.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="filter">Filtrar por texto:</label>
      <input
        type=" text"
        name="filter"
        id="filter"
        className="input"
        placeholder="Escribe para filtrar..."
        onInput={handleInputFilter}
      />
    </form>
  );
}
export default Form;
