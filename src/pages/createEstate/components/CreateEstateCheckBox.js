import React from "react";
import { Form } from "react-bootstrap";
const checkboxOptions = [
  { name: "sell", label: "Sell" },
  { name: "rent", label: "Rent" },
  { name: "parking", label: "Parking" },
  { name: "furnished", label: "Furnished" },
  { name: "offer", label: "Offer" },
];
const CreateEstateCheckBox = ({
  name,
  label,
  value,
  onChange,
  onBlur,
  touched,
  error,
  setFieldValue,
  ...props
}) => {
  const handleCheckBoxChange = (e) => {
    const { name, checked } = e.target;
    if (name === "sell" && checked && value.rent) {
      setFieldValue("rent", false);
      onChange(e);
    } else if (name === "sell" && !checked && !value.rent) {
      setFieldValue("sell", true);
    } else if (name === "rent" && checked && value.sell) {
      setFieldValue("sell", false);
      onChange(e);
    } else if (name === "rent" && !checked && !value.sell) {
      setFieldValue("rent", true);
      onChange(e);
    } else {
      onChange(e);
    }
    // setFieldValue("rent", true);
    //onChange(e);
  };
  return (
    <div key={`inline-1`} className="myInput3">
      {checkboxOptions.map((checBox) => {
        return (
          <Form.Check
            inline
            type="checkbox"
            label={checBox.label}
            checked={value[checBox.name]}
            onChange={handleCheckBoxChange}
            onBlur={onBlur}
            isInvalid={touched[checBox.name] && error[checBox.name]}
            name={checBox.name}
          />
        );
      })}
    </div>
  );
};

export default CreateEstateCheckBox;
