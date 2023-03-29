import * as Styles from "./styles";

import { Outlet } from "react-router-dom";

import { Header } from "../../components/Header";

export function DefaultLayout() {
  return (
    <Styles.LayoutContainer>
      <Header />

      {/* Outlet posiciona os elementos especificos de cada pagina */}
      <Outlet />
    </Styles.LayoutContainer>
  );
}
