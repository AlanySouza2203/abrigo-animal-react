export default function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="how-it-works-section"
    >
      <div className="how-it-works-container">

        <div className="how-badge">
          <div className="how-badge-dot"></div>
          <p className="how-badge-text">Como Funciona</p>
          <div className="how-badge-dot"></div>
        </div>

        {/* Títulos */}
        <h2 className="how-title">Adotar é simples</h2>
        <p className="how-subtitle text-center">
  Em poucos passos você encontra um novo melhor amigo
  e transforma uma vida com amor e carinho.
</p>

        {/* Grid de cards */}
        <div className="how-grid">

          {/* Card 1 */}
          <div className="how-card">
            <div className="how-card-icon yellow">
              <i className="bi bi-search-heart"></i>
            </div>
            <span className="how-card-step">PASSO 01</span>
            <h3 className="how-card-title">Escolha seu Pet</h3>
            <p className="how-card-description">
              Explore nossos animais disponíveis e encontre
              o companheiro ideal para sua família.
            </p>
          </div>

          {/* Card 2 */}
          <div className="how-card">
            <div className="how-card-icon blue">
              <i className="bi bi-ui-checks-grid"></i>
            </div>
            <span className="how-card-step">PASSO 02</span>
            <h3 className="how-card-title">Faça o Cadastro</h3>
            <p className="how-card-description">
              Preencha um formulário rápido para iniciarmos
              uma adoção responsável e segura.
            </p>
          </div>

          {/* Card 3 */}
          <div className="how-card">
            <div className="how-card-icon green">
              <i className="bi bi-house-heart"></i>
            </div>
            <span className="how-card-step">PASSO 03</span>
            <h3 className="how-card-title">Leve Para Casa</h3>
            <p className="how-card-description">
              Após a aprovação, prepare-se para viver uma
              amizade cheia de carinho e felicidade.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}