import React, { useEffect, useState } from "react";
import SideBarSearch from "./SideBarSearch";
import EstateList from "./EstateList";
import "./search.css";
import { useSelector } from "react-redux";
import { apiCall } from "../../apiCall";
import { GET_ESTATES } from "../../URLS";
import { useDispatch } from "react-redux";
import { estateAction } from "../../store/estateSlice";

const SearchPage = () => {
  const dispatch = useDispatch();

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
    getEstates();
  }, []);
  return (
    <div className="SearchPage">
      <SideBarSearch className="SideBarSearch" />
      <EstateList estates={estates} className="EstateList" />
    </div>
  );
};

export default SearchPage;
