import React from "react";
import { Link } from "react-router-dom";

import "./style.scss";

export default function Footer() {
  return (
    <footer>
      <hr />
      <div id="footer-text">
        <Link to="/" style={{ textDecoration: "none" }}>
          <font>Submit Artwork</font>
        </Link>
      </div>
    </footer>
  );
}
