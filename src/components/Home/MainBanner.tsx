export function MainBanner() {
  return (
    <div className="home__main-banner">
      <img
        className="home__main-banner--banner"
        src={require("../../assets/main-banner.png")}
        alt="Banner Promoções"
      />
      <span className="home__main-banner--overlay-text--title">Venha conhecer nossas promoções</span>
      <span className="home__main-banner--overlay-text--sub-title">50% Off nos produtos</span>
      <button className="home__main-banner--overlay-button">Ver produto</button>
    </div>
  );
}
