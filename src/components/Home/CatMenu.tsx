export function CatMenu() {
  return (
    <div className="home__category-menu">
      <div className="home__category-menu--item">
        <div className="home__category-menu--wrapper selected">
          <img
            className="home__category-menu--item-icon"
            src={require("../../assets/tecnologia.png")}
            alt="Tecnologia"
          />
        </div>
        <span className="home__category-menu--item-text selected">
          Tecnologia
        </span>
      </div>
      <div className="home__category-menu--item">
        <div className="home__category-menu--wrapper">
          <img
            className="home__category-menu--item-icon"
            src={require("../../assets/supermercados.png")}
            alt="Supermercado"
          />
        </div>
        <span className="home__category-menu--item-text">Supermercado</span>
      </div>
      <div className="home__category-menu--item">
        <div className="home__category-menu--wrapper">
          <img
            className="home__category-menu--item-icon"
            src={require("../../assets/bebidas.png")}
            alt="Bebidas"
          />
        </div>
        <span className="home__category-menu--item-text">Bebidas</span>
      </div>
      <div className="home__category-menu--item">
        <div className="home__category-menu--wrapper">
          <img
            className="home__category-menu--item-icon"
            src={require("../../assets/ferramentas.png")}
            alt="Ferramentas"
          />
        </div>
        <span className="home__category-menu--item-text">Ferramentas</span>
      </div>
      <div className="home__category-menu--item">
        <div className="home__category-menu--wrapper">
          <img
            className="home__category-menu--item-icon"
            src={require("../../assets/saude.png")}
            alt="Saúde"
          />
        </div>
        <span className="home__category-menu--item-text">Saúde</span>
      </div>
      <div className="home__category-menu--item">
        <div className="home__category-menu--wrapper">
          <img
            className="home__category-menu--item-icon"
            src={require("../../assets/esportes.png")}
            alt="Esportes e Fitness"
          />
        </div>
        <span className="home__category-menu--item-text">
          Esportes e Fitness
        </span>
      </div>
      <div className="home__category-menu--item">
        <div className="home__category-menu--wrapper">
          <img
            className="home__category-menu--item-icon"
            src={require("../../assets/moda.png")}
            alt="Moda"
          />
        </div>
        <span className="home__category-menu--item-text">Moda</span>
      </div>
    </div>
  );
}
