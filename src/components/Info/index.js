import React from "react";
import { useLocation } from "react-router-dom";

import Header from "../Header";
import MiniGallery from "../MiniGallery";

import "./style.scss";

export default function Info() {
  const { state } = useLocation();
  return (
    <>
      <Header />
      <div className="container">
        <img src={state.data.imageUrl} alt="artwork" />
        <div className="info-right">
          <div className="information">
            <div id="art-title">{state.data.title}</div>
            <div id="art-description">{state.data.description}</div>
            <div id="source">
              <a href={state.data.url}>GO TO SOURCE</a>
            </div>
          </div>
          <div className="more">
            <div id="more-title">More Artworks</div>
            <MiniGallery />
          </div>
        </div>
      </div>
    </>
  );
}
