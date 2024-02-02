import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { createValidationSchemaGeneric } from "../../../helperFunctions";
import { Form } from "react-bootstrap";
const Myinput = (props) => {
  const initialValues = { [props.inputName]: "" };
  const validationSchema = createValidationSchemaGeneric(props.inputName);
  const handleSubmit = (values, errors) => {};
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <Form>
            <Form.Group className="mb-3 myInput" controlId="formBasicName">
              <Form.Label>{props.lable}</Form.Label>
              <Form.Control
                name={props.inputName}
                /* Set onChange to handleChange */
                onChange={handleChange}
                /* Set onBlur to handleBlur */
                onBlur={handleBlur}
                /* Store the value of this input in values.name, make sure this is named the same as the name property on the form element */
                value={values[props.inputName]}
                error={!!touched.name && !!errors.name}
                type="text"
                placeholder="Enter Name"
                className={touched.name && errors.name ? "error2" : null}
                style={{ marginTop: "10px", marginBottom: "20px" }}
              />
              {touched.name && errors.name ? (
                <div className="error-message">
                  {errors.name}
                  {touched.name}
                </div>
              ) : (
                <div>
                  <Form.Text className="text-muted"></Form.Text>
                </div>
              )}
              {/*  */}
            </Form.Group>

            {/* <div style={{ marginTop: "10px" }}>
        Forgot youre password? <Link to={`/forgot`}>Click here</Link>
      </div> */}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Myinput;
