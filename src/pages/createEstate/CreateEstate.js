import React, { useState } from "react";
import * as Yup from "yup";

import "./CreateRealEstate.css";
import Myinput from "./components/input";
import GenericInput from "./components/GenericInput";
import ImageInputs from "./components/ImageInputs";
import MyCheckBoxes from "./components/myCheckBoxes";
const lableMap = { name: "Name" };

const CreateEstate = () => {
  const [images, setImages] = useState([]);
  const initialValues = {
    name: "",
    description: "",
    address: "",
    // Add more fields as needed
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [isValid, setIsValid] = useState(false);
  const [checkBoxes, setcheckBoxes] = useState({
    rentSell: "sell",

    furnish: false,
    parking: false,
    offer: false,
  });
  const isTextAreaArray = [false, true, false];
  const regularPriceLable =
    checkBoxes.rentSell === "sell" ? (
      <span className="detail">Regular Price</span>
    ) : (
      <span className="detail">
        Regular Price
        <span>($ / Month)</span>
      </span>
    );
  const validationSchema = Yup.object({
    name: Yup.string()
      .required("First Name is required")
      .min(2, "Minimum 2 chars"),
    description: Yup.string()
      .required("Description is required")
      .min(2, "Minimum 2 chars"),
    address: Yup.string()
      .required("Address is required")
      .min(2, "Minimum 2 chars"),
    // Add more validations for other fields
  });
  const onSubmit = () => {
    // Handle form submission logic here
    console.log("Form values:", formValues);
    console.log("Is valid:", isValid);
  };

  const onValuesChange = (values, currentIsValid) => {
    // Update the formValues state and isValid when values change in GenericInput
    setFormValues(values);
    setIsValid(currentIsValid);
  };
  const handleCheckBoxes = (value) => {
    // Update the formValues state and isValid when values change in GenericInput
  };
  return (
    <div className="create-real-estate-main">
      <h2>Create Real Estate</h2>
      <div className="real-estate-inputs2">
        <div className="real-estate-inputs">
          <GenericInput
            onValuesChange={onValuesChange}
            isTextAreaArray={isTextAreaArray}
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          />
          <ImageInputs
            images={images}
            setImages={setImages}
            onSubmit={onSubmit}
          />
        </div>
        <MyCheckBoxes
          checkBoxes={checkBoxes}
          setcheckBoxes={setcheckBoxes}
          handleCheckBoxes={handleCheckBoxes}
        />
        <div className="details-input">
          <div>
            <span className="detail">Beds</span>
            <input
              type="number"
              id="bathrooms"
              min="1"
              max="10"
              required
              className="test-input"
            />
          </div>
          <div>
            <span className="detail">Baths</span>
            <input
              type="number"
              id="bathrooms"
              min="1"
              max="10"
              required
              className="test-input"
            />
          </div>
          <div>
            {" "}
            {regularPriceLable}
            <input
              type="number"
              id="bathrooms"
              required
              className="test-input"
            />
          </div>
          {checkBoxes.offer ? (
            <div>
              <span className="detail">Discount</span>
              <input
                type="number"
                id="discount"
                required
                className="test-input"
              />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default CreateEstate;
