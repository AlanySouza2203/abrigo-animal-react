

export default function Filters({ filtro, setFiltro }) {
  return (
    <div className="filters-wrapper">

      <button
        className={`filter-btn ${filtro === "Todos" ? "active" : ""}`}
        onClick={() => setFiltro("Todos")}
      >
        Todos
      </button>

      <button
        className={`filter-btn ${filtro === "Cão" ? "active" : ""}`}
        onClick={() => setFiltro("Cão")}
      >
        Cães
      </button>

      <button
        className={`filter-btn ${filtro === "Gato" ? "active" : ""}`}
        onClick={() => setFiltro("Gato")}
      >
        Gatos
      </button>

      <button
        className={`filter-btn ${filtro === "Coelho" ? "active" : ""}`}
        onClick={() => setFiltro("Coelho")}
      >
         Coelhos
      </button>

    </div>
  );
}