import React from "react";
import { useLocation } from "react-router-dom";

import Header from "../Header";

import "./style.scss";

export default function Info() {
  const { state } = useLocation();
  return (
    <>
      <Header />
      <div className="container">
        <img src={state.data.imageUrl} alt="artwork" />
        <div className="information">
          <div id="art-title">{state.data.title}</div>
          <div id="art-description">{state.data.description}</div>
          <div id="source">
            <a href={state.data.imageUrl}>GO TO SOURCE</a>
          </div>
          {/* <h2>{state.data.url}</h2> */}
        </div>
      </div>
    </>
  );
}
