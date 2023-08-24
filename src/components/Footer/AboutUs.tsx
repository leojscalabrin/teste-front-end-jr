export function AboutUs() {
  return (
    <div className="footer__about-us">
      <p className="footer__about-us--title">Sobre nós</p>
      <div className="footer__about-us--item-wrapper">
        <p className="footer__about-us--item">Conheça</p>
        <p className="footer__about-us--item">Como comprar</p>
        <p className="footer__about-us--item">Indicação e desconto</p>
      </div>

      <div className="footer__about-us--socials-wrapper">
        <img
          className="footer__about-us--socials"
          src={require("../../assets/facebook.png")}
          alt="Facebook"
        />
        <img
          className="footer__about-us--socials"
          src={require("../../assets/instagram.png")}
          alt="Instagram"
        />
        <img
          className="footer__about-us--socials"
          src={require("../../assets/youtube.png")}
          alt="Youtube"
        />
      </div>
    </div>
  );
}
