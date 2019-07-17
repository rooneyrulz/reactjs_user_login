import React from "react";
import SpinnerGif from "./spinner.gif";

const Spinner = () => (
  <img
    style={{
      display: "block",
      width: "200px",
      margin: "auto",
      textAlign: "center"
    }}
    src={SpinnerGif}
    alt="Auth Page Spinner"
  />
);

export default Spinner;
