import * as Styles from "./styles";

import headerCover from "../../assets/cover.svg";

export function Header() {
  return (
    <Styles.HeaderContainer>
      <img src={headerCover} alt="" />
    </Styles.HeaderContainer>
  );
}
