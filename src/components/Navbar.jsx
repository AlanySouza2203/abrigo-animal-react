function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* LOGO */}
        <div className="navbar-logo">
          <div className="navbar-logo-icon">
            <i className="bi bi-heart-fill"></i>
          </div>
          <h1 className="navbar-logo-text">
            Adote<span>Pet</span>
          </h1>
        </div>

        {/* MENU */}
        <nav className="navbar-menu">
          <a href="#animais">Animais</a>
          <a href="#como-funciona">Como Funciona</a>
          <a href="#contato">Contato</a>
        </nav>

        {/* BUTTON */}
        <button className="navbar-button">
          Adotar Agora
        </button>

      </div>
    </header>
  )
}

export default Navbar