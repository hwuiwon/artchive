import React from "react";
import { useLocation } from "react-router-dom";

export default function Info() {
  const location = useLocation();
  console.log(location);
  return <div>Info</div>;
}
