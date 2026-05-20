function Contact() {
  return (
    <section id="contato" className="contact-section">
      <div className="contact-container">

        <div className="contact-text">
          <p className="contact-badge">CONTATO</p>

          <h2 className="contact-title">
            Fale com a gente
          </h2>

          <p className="contact-description">
            Tire dúvidas sobre adoção ou entre em contato
            para ajudar nossos animais.
          </p>
        </div>

        <div className="contact-buttons">
          <a
            href="https://wa.me/5561999999999"
            target="_blank"
            className="contact-btn primary"
          >
            WhatsApp
          </a>

          <a
            href="mailto:contato@adotepet.com"
            className="contact-btn secondary"
          >
            E-mail
          </a>
        </div>

      </div>
    </section>
  )
}

export default Contact