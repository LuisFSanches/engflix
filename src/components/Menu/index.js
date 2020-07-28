import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/LogoMain.png";

import "./Menu.css";

//Componentes
//import ButtonLink from "../ButtonLink";
import Button from "../Button";

export default function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="Logo" />
      </Link>

      <Button as={Link} to="/cadastro/video">
        Novo Video
      </Button>
    </nav>
  );
}
