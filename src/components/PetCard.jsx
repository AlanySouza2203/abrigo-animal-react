function PetCard({ pet }) {
  if (!pet) return null;

  return (
    <div className="pet-card">
      <div className="pet-card-image-wrapper">
        <img
          src={pet.imagem}
          alt={pet.nome}
          className="pet-card-image"
        />

        <span className="pet-card-type-badge">
          {pet.tipo}
        </span>

        <button className="pet-card-favorite">
          <i className="bi bi-heart"></i>
        </button>

        <p className="pet-card-location">
          <i className="bi bi-geo-alt-fill"></i>
          {pet.cidade}
        </p>
      </div>

      <div className="pet-card-content">
        <div className="pet-card-header">
          <h2 className="pet-card-name">
            {pet.nome}
          </h2>

          <span className="pet-card-size-badge">
            {pet.porte}
          </span>
        </div>

        <p className="pet-card-breed">
          {pet.raca} • {pet.idade}
        </p>

        <p className="pet-card-description">
          Animal dócil, carinhoso e pronto para ganhar um novo lar cheio de amor.
        </p>

        <div className="pet-card-health">
          <span className="pet-card-health-item">
            <i className="bi bi-shield-check"></i>
            Vacinado
          </span>

          <span className="pet-card-health-item">
            <i className="bi bi-scissors"></i>
            Castrado
          </span>
        </div>

        <button className="pet-card-button">
          Quero Adotar
        </button>
      </div>
    </div>
  );
}

export default PetCard;