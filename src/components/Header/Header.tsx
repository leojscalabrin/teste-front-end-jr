import "../../styles/Header.scss";
import { HeaderInfo } from "../Header/HeaderInfo";
import { HeaderMiddle } from "../Header/HeaderMiddle";
import { HeaderMenu } from "./HeaderMenu";

export function Header() {
  return (
    <div className="header">
      <HeaderInfo />
      <HeaderMiddle />
      <HeaderMenu />
    </div>
  );
}
