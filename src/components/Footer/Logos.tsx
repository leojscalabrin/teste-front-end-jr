export function Logos() {
  return (
    <div className="footer__logos">
      <img
        className="footer__logos--image"
        src={require("../../assets/econverse-logo-white.png")}
        alt="econverse"
      />
      <img
        className="footer__logos--image"
        src={require("../../assets/vtex-logo-white.png")}
        alt="Vtex"
      />
    </div>
  );
}
