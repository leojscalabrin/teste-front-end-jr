import "../../styles/Footer.scss";
import { AboutUs } from "./AboutUs";
import { Copyright } from "./Copyright";
import { Logos } from "./Logos";
import { Newsletter } from "./Newsletter";
import { Payments } from "./Payments";
import { Utils } from "./Utils";

export function Footer() {
  return (
    <div className="footer">
      <div className="footer__top">
        <AboutUs />
        <Utils />
        <Payments />
        <Newsletter />
      </div>
      <div className="footer__bottom">
        <Copyright />
        <Logos />
      </div>
    </div>
  );
}
