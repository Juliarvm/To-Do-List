const Filter = ({ filter, setFilter, setSort, setPrioritySort }) => {
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
            <button onClick={() => setSort("Asc")}>Asc</button>
            <button onClick={() => setSort("Desc")}>Desc</button>
          </div>
          <div>
            <p>Prioridade:</p>
            <button onClick={() => setPrioritySort("HighToLow")}>Alta</button>
            <button onClick={() => setPrioritySort("LowToHigh")}>Baixa</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Filter;
  