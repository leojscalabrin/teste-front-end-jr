export function HeaderMenu() {
  return (
    <div className="header__menu">
      <div className="header__menu--category todas">Todas as categorias</div>
      <div className="header__menu--category supermercado">Supermercado</div>
      <div className="header__menu--category livros">Livros</div>
      <div className="header__menu--category moda">Moda</div>
      <div className="header__menu--category lançamentos">Lançamentos</div>
      <div className="header__menu--category ofertas">Ofertas do dia</div>
      <div className="header__menu--category assinatura">
        <img
          className="header__menu--category-icon"
          src={require("../../assets/CrownSimple.png")}
          alt="Crown"
        />
        Assinatura
      </div>
    </div>
  );
}
