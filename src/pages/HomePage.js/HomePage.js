import React from "react";
import HeadLines from "./components/HeadLines";
import Slide from "./components/Slide";
import { images } from "../../helperFunctions";

const HomePage = () => {
  return (
    <div>
      <HeadLines />
      <Slide myCssClass="car" images={images} />
    </div>
  );
};

export default HomePage;
