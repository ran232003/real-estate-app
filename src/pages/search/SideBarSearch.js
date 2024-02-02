import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import SearchCheckBoxes from "./components/SearchCheckBoxes";
import { Amenities, typesCheckBox } from "../../helperFunctions";
import SearchSort from "./components/SearchSort";
import { Button } from "react-bootstrap";
import { SEARCH_ESTATES } from "../../URLS";
import { apiCall } from "../../apiCall";
import { useDispatch } from "react-redux";
import { estateAction } from "../../store/estateSlice";

const SideBarSearch = () => {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    search: "",
    offer: false,
    rentSell: true,
    rent: false,
    sell: false,
    furnished: false,
    parking: false,
    select: "latest",
  });
  const handleSubmit = async () => {
    console.log(inputs);
    const url = new URL(SEARCH_ESTATES);

    // Add parameters to the URL
    for (const [key, value] of Object.entries(inputs)) {
      if (value !== false) {
        url.searchParams.append(key, value);
      }
    }

    // You can use paramsString in your URL or log it to see the result
    console.log(url);
    const data = await apiCall("GET", url.href);
    if (data.status !== "ok") {
      return;
    }
    dispatch(estateAction.setEstates(data.estates));
  };
  return (
    <div className="SideBarSearch">
      <SearchBar value={inputs.value} inputs={inputs} setInputs={setInputs} />
      <SearchCheckBoxes
        checkboxOptions={typesCheckBox}
        inputs={inputs}
        setInputs={setInputs}
      />
      <SearchCheckBoxes
        checkboxOptions={Amenities}
        inputs={inputs}
        setInputs={setInputs}
      />
      <SearchSort value={inputs.select} inputs={inputs} setInputs={setInputs} />
      <Button
        className="auth-btn2 search-btn"
        type="submit"
        onClick={handleSubmit}
      >
        Search
      </Button>
    </div>
  );
};

export default SideBarSearch;
