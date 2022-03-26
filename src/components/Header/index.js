import React from "react";
import { Link } from "react-router-dom";

import "./style.scss";

export default function Header() {
  return (
    <nav>
      <div id="nav-left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <font>artchive</font>
        </Link>
      </div>
      <hr />
    </nav>
  );
}
