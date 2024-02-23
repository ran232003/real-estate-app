import React, { useEffect } from "react";
import HeadLines from "./components/HeadLines";
import Slide from "./components/Slide";
import { images } from "../../helperFunctions";
import { useDispatch, useSelector } from "react-redux";
import EstateList from "../search/EstateList";

const HomePage = () => {
  const estates = useSelector((state) => {
    return state.estate.estates;
  });
  const dispatch = useDispatch();

  return (
    <div>
      <HeadLines />
      <Slide myCssClass="car" images={images} />
      <EstateList estates={estates} headline="Latest Estates" width="100%" />
    </div>
  );
};

export default HomePage;
