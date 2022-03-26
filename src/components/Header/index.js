import React from "react";
import "./style.scss";

import logo from "../../assets/logo.png";

export default function Header() {
  return (
    <nav>
      <div id="nav-left">
        <img src={logo} alt="logo" />
      </div>
    </nav>
  );
}
