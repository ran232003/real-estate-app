import React from "react";
import { Form } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import { useDispatch } from "react-redux";
import { estateAction } from "../../../store/estateSlice";

const SearchSort = (props) => {
  const dispatch = useDispatch();

  const handleSelectChange = (event) => {
    console.log(event.target.value);
    props.setInputs({ ...props.inputs, select: event.target.value });
    dispatch(estateAction.sortEstate(event.target.value));
    // If you need to perform any other actions when the value changes, you can do it here
    // For example, you can pass the selected value to a parent component using props
    // props.onSortChange(event.target.value);
  };
  return (
    <div className="SearchSort">
      <span>Sort:</span>
      <Form.Select
        aria-label="Default select example"
        className="sortSelect"
        value={props.value}
        onChange={handleSelectChange}
      >
        <option value="latest">Latest</option>
        <option value="htl">High to low</option>
        <option value="lth">Low to High</option>
        <option value="oldest">Oldest</option>
      </Form.Select>
    </div>
  );
};

export default SearchSort;
