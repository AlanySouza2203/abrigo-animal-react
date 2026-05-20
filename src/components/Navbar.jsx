import { useState } from "react";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

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

        {/* MENU DESKTOP */}
        <nav className="navbar-menu">
          <a href="#animais">Animais</a>
          <a href="#como-funciona">Como Funciona</a>
          <a href="#contato">Contato</a>
        </nav>

        {/* BOTÃO */}
        <a href="#animais" className="navbar-button">
  Adotar Agora
</a>
        {/* MENU MOBILE ICON */}
        <button
          className="navbar-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className={menuOpen ? "bi bi-x-lg" : "bi bi-list"}></i>
        </button>

      </div>

      {/* MENU MOBILE */}
      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        <a href="#animais">Animais</a>
        <a href="#como-funciona">Como Funciona</a>
        <a href="#contato">Contato</a>
      </div>
    </header>
  )
}

export default Navbar;