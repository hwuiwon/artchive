import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Info from "./components/Info";

import "./index.css";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="info" element={<Info />} />
      <Route path="*" element={<App />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
