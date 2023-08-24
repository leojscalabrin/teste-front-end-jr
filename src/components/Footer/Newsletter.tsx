export function Newsletter() {
  return (
    <div className="footer__newsletter">
      <div className="footer__newsletter--title-wrapper">
        <p className="footer__newsletter--title-thin">
          Cadastre-se e receba nossas
        </p>
        <p className="footer__newsletter--title-bold">Novidades e promoções</p>
      </div>

      <p className="footer__newsletter--description">
        Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia lorem
        ipsum
      </p>

      <div className="footer__newsletter--input-wrapper">
        <input
          className="footer__newsletter--email"
          type="text"
          placeholder="SEU E-MAIL"
        ></input>
        <button className="footer__newsletter--button">OK</button>
      </div>
    </div>
  );
}
