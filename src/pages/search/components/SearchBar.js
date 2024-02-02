import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "../search.css";
const SearchBar = (props) => {
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    props.setInputs({ ...props.inputs, search: e.target.value });
  };
  return (
    <div className="searchBar">
      <span style={{ marginRight: "10px" }}>Search Term: </span>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control
            name="search"
            /* Set onChange to handleChange */
            onChange={handleChange}
            value={props.value}
            /* Set onBlur to handleBlur */
            /* Store the value of this input in values.name, make sure this is named the same as the name property on the form element */
            type="text"
            placeholder="Search"
          />
        </Form.Group>
      </Form>
    </div>
  );
};

export default SearchBar;
