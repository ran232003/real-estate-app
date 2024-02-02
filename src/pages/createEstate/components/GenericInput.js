import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Form } from "react-bootstrap";
import SubmitButton from "./SubmitButton";
const GenericInput = ({
  initialValues,
  onSubmit,
  validationSchema,
  isTextAreaArray,
  onValuesChange,
}) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });
  React.useEffect(() => {
    onValuesChange(formik.values, formik.isValid);
  }, [formik.values, formik.isValid, onValuesChange]);
  return (
    <div className="inner-inputs2">
      <Form onSubmit={formik.handleSubmit}>
        {Object.keys(initialValues).map((fieldName, index) => (
          <div key={fieldName}>
            <Form.Group
              key={fieldName}
              className="mb-3 myInput"
              controlId="formBasicName"
            >
              {isTextAreaArray[index] ? (
                <Form.Control
                  placeholder={fieldName}
                  type="text"
                  id={fieldName}
                  name={fieldName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values[fieldName]}
                  as="textarea"
                  rows={3}
                />
              ) : (
                <Form.Control
                  type="text"
                  id={fieldName}
                  placeholder={fieldName}
                  name={fieldName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values[fieldName]}
                />
              )}

              {formik.touched[fieldName] && formik.errors[fieldName] ? (
                <div style={{ color: "red" }}>{formik.errors[fieldName]}</div>
              ) : null}
            </Form.Group>
          </div>
        ))}
      </Form>
    </div>
  );
};

export default GenericInput;
