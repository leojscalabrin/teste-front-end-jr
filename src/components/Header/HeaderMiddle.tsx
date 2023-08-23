export function HeaderMiddle() {
  return (
    <div className="header__middle">
      <img
        className="header__middle--logo"
        src={require("../../assets/vtex-logo.png")}
        alt="Vtex Logo"
      />
      <div className="header__middle--search-bar-wrapper">
        <input
          className="header__middle--search-bar"
          type="text"
          placeholder="O que você está buscando?"
        ></input>
        <img
          className="header__middle--search-bar-icon"
          src={require("../../assets/MagnifyingGlass.png")}
          alt="Magnifying Glass"
        />
      </div>
      <div className="header__middle--icons-wrapper">
        <img className="header__middle--icons-wrapper--icon" src={require("../../assets/Box.png")} alt="Box" />
        <img className="header__middle--icons-wrapper--icon" src={require("../../assets/Heart.png")} alt="Heart" />
        <img className="header__middle--icons-wrapper--icon" src={require("../../assets/UserCircle.png")} alt="UserCircle" />
        <img className="header__middle--icons-wrapper--icon" src={require("../../assets/ShoppingCart.png")} alt="ShoppingCart" />
      </div>
    </div>
  );
}
