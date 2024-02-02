import React from "react";
import CreateEstateCheckBox from "./components/CreateEstateCheckBox";

const checkboxOptions = [
  { name: "sell", label: "Sell" },
  { name: "rent", label: "Rent" },
  { name: "parking", label: "Parking" },
  { name: "furnished", label: "Furnished" },
  { name: "offer", label: "Offer" },
];

const CreateEstateCheckBoxGroup = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
}) => {
  return (
    <div className="check-boxes2">
      {checkboxOptions.map((option) => (
        <CreateEstateCheckBox
          key={option.name}
          name={option.name}
          label={option.label}
          value={values[option.name]}
          onChange={handleChange}
          onBlur={handleBlur}
          touched={touched[option.name]}
          error={errors[option.name]}
        />
      ))}
    </div>
  );
};

export default CreateEstateCheckBoxGroup;
