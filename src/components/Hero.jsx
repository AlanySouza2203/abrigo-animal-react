function Hero() {
  return (
    <section className="hero-section">
      
      {/* Imagem de fundo */}
      <img
        src="https://i.pinimg.com/736x/59/61/21/59612194940e8950a9cf7a56dbce37a6.jpg"
        alt="Hero background"
        className="hero-background"
      />

      {/* Overlay */}
      <div className="hero-overlay"></div>

      {/* Conteúdo */}
      <div className="hero-content">

        {/* Badge "NOSSOS ANIMAIS" - DESTACADO */}
        <div className="hero-badge-nossos-animais">
          <div className="hero-badge-dot"></div>
          <p className="hero-badge-nossos-text">NOSSOS ANIMAIS</p>
          <div className="hero-badge-dot"></div>
        </div>

        {/* Título - DESTACADO */}
        <h1 className="hero-title-destacado">
          Encontre seu novo melhor amigo
        </h1>

        {/* Subtítulo - menor */}
        <p className="hero-subtitle-menor">
          Cada animal tem uma história única e muito amor para dar.
        </p>

        {/* Botões */}
        <div className="hero-buttons">
          <button className="hero-btn-primary">
            Ver Animais
          </button>
          <button className="hero-btn-secondary">
            Como Funciona
          </button>
        </div>

      </div>

    </section>
  )
}

export default Hero