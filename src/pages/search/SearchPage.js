import React, { useEffect, useState } from "react";
import SideBarSearch from "./SideBarSearch";
import EstateList from "./EstateList";
import "./search.css";
import { useSelector } from "react-redux";
import { apiCall } from "../../apiCall";
import { GET_ESTATES } from "../../URLS";
import { useDispatch } from "react-redux";
import { estateAction } from "../../store/estateSlice";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";

const SearchPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const check = location.state?.check;
  console.log(check);
  const estates = useSelector((state) => {
    return state.estate.estates;
  });
  const getEstates = async () => {
    try {
      const data = await apiCall("GET", GET_ESTATES);
      dispatch(estateAction.setEstates(data.estates));
    } catch (error) {}
  };
  useEffect(() => {
    if (!check) {
      getEstates();
    }
  }, []);
  return (
    <div className="SearchPage">
      <SideBarSearch className="SideBarSearch" />
      <EstateList
        estates={estates}
        className="EstateList"
        headline="Estate Results"
        width="70%"
      />
    </div>
  );
};

export default SearchPage;
