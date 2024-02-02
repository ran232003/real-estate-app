import React from "react";
import Form from "react-bootstrap/Form";

const MyCheckBoxes = (props) => {
  console.log(props.checkBoxes);
  const handleChange = (e) => {
    console.log(e.target.id);
    if (e.target.id === "rent" || e.target.id === "sell") {
      console.log("in if");
      return props.setcheckBoxes({
        ...props.checkBoxes,
        rentSell: e.target.id,
      });
    }
    props.setcheckBoxes({
      ...props.checkBoxes,
      [e.target.id]: !props.checkBoxes[e.target.id],
    });
  };
  return (
    <div>
      {" "}
      <Form>
        <div key={`inline-1`} className="mb-3">
          <Form.Check
            inline
            label="Sale"
            name="group1"
            type="checkbox"
            id={`sell`}
            checked={props.checkBoxes.rentSell === "sell"}
            onChange={handleChange}
          />
          <Form.Check
            inline
            label="Rent"
            name="group2"
            type="checkbox"
            id={`rent`}
            checked={props.checkBoxes.rentSell === "rent"}
            onChange={handleChange}
          />
          <Form.Check
            inline
            label="Parking spot"
            type="checkbox"
            id={`furnish`}
            onChange={handleChange}
          />
          <Form.Check
            inline
            label="Furnished"
            type="checkbox"
            id={`parking`}
            onChange={handleChange}
          />
          <Form.Check
            inline
            label="Offer"
            type="checkbox"
            id={`offer`}
            onChange={handleChange}
          />
        </div>
      </Form>
    </div>
  );
};

export default MyCheckBoxes;
