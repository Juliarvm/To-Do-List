const Filter = ({ filter, setFilter, setSort, setPrioritySort }) => {
  const handleSortChange = (order) => {
    setSort(order); // Define a ordenação alfabética
    setPrioritySort(""); // Desativa a ordenação por prioridade
  };

  const handlePrioritySortChange = (order) => {
    setPrioritySort(order); // Define a ordenação por prioridade
    setSort(""); // Desativa a ordenação alfabética
  };

  return (
    <div className="filter">
      <h2>Filtrar:</h2>
      <div className="filter-options">
        <div>
          <p>Status:</p>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="All">Todas</option>
            <option value="Completed">Completas</option>
            <option value="Incomplete">Incompletas</option>
          </select>
        </div>
        <div>
          <p>Ordem alfabética:</p>
          <button onClick={() => handleSortChange("Asc")}>Asc</button>
          <button onClick={() => handleSortChange("Desc")}>Desc</button>
        </div>
        <div>
          <p>Prioridade:</p>
          <button onClick={() => handlePrioritySortChange("HighToLow")}>Alta</button>
          <button onClick={() => handlePrioritySortChange("LowToHigh")}>Baixa</button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
