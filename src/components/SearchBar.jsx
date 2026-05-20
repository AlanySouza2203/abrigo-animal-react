function SearchBar() {
  return (
    <div className="relative w-full md:w-[380px]">

      <i className="bi bi-search absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"></i>

      <input
        type="text"
        placeholder="Buscar por nome ou raça..."
        className="w-full h-14 pl-14 pr-5 rounded-full border border-slate-200 bg-white outline-none focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100 transition"
      />

    </div>
  )
}

export default SearchBar