import React from "react";
import "./components.css";
import { Link } from "react-router-dom";
const HeadLines = () => {
  return (
    <div className="headlines-main">
      <div className="headlines-sub">
        <h1 className="h1">
          Find your next perfect <br /> place with ease
        </h1>
        <h6 className="h6">
          Ran Estate will help you find your home fast, easy and comfortable.
          Our expert support are always available
        </h6>
        <b>
          <Link className="link" to={"/search"}>
            Let's Start now...
          </Link>
        </b>
      </div>
    </div>
  );
};

export default HeadLines;
