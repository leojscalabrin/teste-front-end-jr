export function HeaderInfo() {
  return (
    <div className="header__info">
      <div className="header__info--item">
        <img className="header__info--icon" src={require("../../assets/ShieldCheck.png")} alt="Shield Check"/>
        <div className="header__info--text">
          <span className="header__info--text--grey">Compra</span>
          <span className="header__info--text--pink"> 100% segura</span>
        </div>
      </div>
      <div className="header__info--item">
        <img className="header__info--icon" src={require("../../assets/Truck.png")} alt="Truck"/>
        <div className="header__info--text">
          <span className="header__info--text--grey">Frete grátis</span>
          <span className="header__info--text--pink"> acima de R$ 200</span>
        </div>
      </div>
      <div className="header__info--item">
        <img className="header__info--icon" src={require("../../assets/CreditCard.png")} alt="Credit Card"/>
        <div className="header__info--text">
          <span className="header__info--text--grey">Parcele</span>
          <span className="header__info--text--pink"> suas compras</span>
        </div>
      </div>
    </div>
  );
}
