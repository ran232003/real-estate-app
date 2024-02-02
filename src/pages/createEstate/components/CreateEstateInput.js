// CreateEstateInput.js
import React from "react";
import { Form } from "react-bootstrap";

const CreateEstateInput = ({
  name,
  as,
  label,
  value,
  error,
  onChange,
  onBlur,
  placeholder,
  type,
  setFieldValue,
  classValue,
}) => {
  return (
    <Form.Group className={`mb-3 ${classValue}`} controlId={`formBasic${name}`}>
      {label ? (
        <Form.Label style={{ marginRight: "10px", marginLeft: "10px" }}>
          {label}
        </Form.Label>
      ) : null}

      <Form.Control
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        type={type}
        placeholder={placeholder}
        as={as}
        setFieldValue={setFieldValue}
      />
      {error ? (
        <div className="error-message">{error}</div>
      ) : (
        <div>
          <Form.Text className="text-muted"></Form.Text>
        </div>
      )}
    </Form.Group>
  );
};

export default CreateEstateInput;
