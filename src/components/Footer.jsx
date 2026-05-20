function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        
        <div className="footer-grid">

          {/* Logo e descrição */}
          <div>
            <div className="footer-logo-wrapper">
              <div className="footer-logo-icon">
                <i className="bi bi-heart-fill"></i>
              </div>
              <h2 className="footer-logo-text">
                Adote<span>Pet</span>
              </h2>
            </div>
            <p className="footer-description">
              Conectamos animais que precisam de amor
              com famílias que têm amor para dar.
              Adotar salva vidas.
            </p>
            <div className="footer-social">
              <button className="footer-social-btn">
                <i className="bi bi-instagram"></i>
              </button>
              <button className="footer-social-btn">
                <i className="bi bi-facebook"></i>
              </button>
            </div>
          </div>

          
          <div>
            <h3 className="footer-title">Links</h3>
            <ul className="footer-links">
              <li>
                <a href="#animais">Nossos Animais</a>
              </li>
              <li>
                <a href="#como-funciona">Como Funciona</a>
              </li>
              <li>
               <a href="#contato">Contato</a>
              </li>
            </ul>
          </div>

        </div>

        
        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2025 AdotePet. Todos os direitos reservados.
          </p>
          <p className="footer-credits">
            Feito com amor para os animais
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;