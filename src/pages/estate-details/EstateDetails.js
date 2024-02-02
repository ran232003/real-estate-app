import React from "react";
import Slide from "../HomePage.js/components/Slide";
import { useLocation, useNavigate } from "react-router-dom";
import "./EstateDetails.css";
import EstateInfo from "./components/EstateInfo";
const EstateDetails = () => {
  const location = useLocation();
  const estate = location.state.estate;
  return (
    <div className="EstateDetails">
      <Slide images={estate.images} />
      <EstateInfo estate={estate} />
    </div>
  );
};

export default EstateDetails;
