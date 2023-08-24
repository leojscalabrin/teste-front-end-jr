export function Payments() {
  return (
    <div className="footer__payments">
      <p className="footer__payments--title">Formas de Pagamento</p>
      <div className="footer__payments--wrapper">
        <img
          className="footer__payments--item"
          src={require("../../assets/visa.png")}
          alt="Visa"
        />
        <img
          className="footer__payments--item"
          src={require("../../assets/elo.png")}
          alt="Elo"
        />
        <img
          className="footer__payments--item"
          src={require("../../assets/alelo.png")}
          alt="Alelo"
        />
        <img
          className="footer__payments--item"
          src={require("../../assets/dinners.png")}
          alt="Dinners Club"
        />
        <img
          className="footer__payments--item"
          src={require("../../assets/ifood.png")}
          alt="iFood"
        />
        <img
          className="footer__payments--item"
          src={require("../../assets/mastercard.png")}
          alt="MasterCard"
        />
        <img
          className="footer__payments--item"
          src={require("../../assets/pix.png")}
          alt="Pix"
        />
        <img
          className="footer__payments--item"
          src={require("../../assets/amex.png")}
          alt="Amex"
        />
        <img
          className="footer__payments--item"
          src={require("../../assets/ticket.png")}
          alt="Ticket"
        />
        <img
          className="footer__payments--item"
          src={require("../../assets/sodexo.png")}
          alt="Sodexo"
        />
      </div>
    </div>
  );
}
