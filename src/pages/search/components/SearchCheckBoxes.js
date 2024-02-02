import React from "react";
import { Form } from "react-bootstrap";

const SearchCheckBoxes = (props) => {
  const handleCheckBoxChange = (e) => {
    const { name, checked } = e.target;
    console.log(name, checked);
    if (name === "rentSell" && checked === true) {
      props.setInputs({
        ...props.inputs,
        rentSell: true,
        sell: false,
        rent: false,
      });
    } else if (name === "sell" && checked === true) {
      props.setInputs({
        ...props.inputs,
        rentSell: false,
        sell: true,
        rent: false,
      });
    } else if (name === "rent" && checked === true) {
      props.setInputs({
        ...props.inputs,
        rentSell: false,
        sell: false,
        rent: true,
      });
    } else if (name !== "rent" && name !== "sell" && name !== "rentSell") {
      console.log("if");
      props.setInputs({
        ...props.inputs,
        [name]: checked,
      });
    }
  };
  if (props.checkboxOptions) {
    return (
      <div key={`inline-1`} className="search-checkBoxes">
        {props.checkboxOptions.map((checBox) => {
          return (
            <Form.Check
              inline
              type="checkbox"
              label={checBox.label}
              onChange={handleCheckBoxChange}
              name={checBox.name}
              checked={props.inputs[checBox.name]}
            />
          );
        })}
      </div>
    );
  } else {
    return;
  }
};

export default SearchCheckBoxes;
