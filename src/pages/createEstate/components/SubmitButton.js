import React from "react";
import { Button } from "react-bootstrap";

const SubmitButton = ({ onSubmit }) => {
  return (
    <Button type="submit" onClick={onSubmit}>
      Submit
    </Button>
  );
};

export default SubmitButton;
