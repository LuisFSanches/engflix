import React from "react";
import Logo from "../../assets/img/LogoMain.png";

import "./Menu.css";

//Componentes
//import ButtonLink from "../ButtonLink";
import Button from "../Button";

export default function Menu() {
  return (
    <nav className="Menu">
      <a href="">
        <img className="Logo" src={Logo} alt="Logo" />
      </a>
      <Button as="a" href="/">
        Novo Video
      </Button>
    </nav>
  );
}
