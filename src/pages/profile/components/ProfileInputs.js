import React from "react";
import { Formik } from "formik";
import { Button, Form } from "react-bootstrap";

import * as Yup from "yup";

import { useDispatch, useSelector } from "react-redux";

import "../Profile.css";

import { useNavigate } from "react-router-dom";
import { createValidationSchemaBook } from "../../../helperFunctions";
import { loadingAction } from "../../../store/loadingSlice";
import { toastAction } from "../../../store/toastSlice";
import { authAction } from "../../../store/authSlice";
const ProfileInputs = (props) => {
  const user = props.user;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const status = "signup";
  const initialValues = user
    ? { email: user.email, password: "", name: user.name }
    : { email: "", password: "", name: "" };
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name Required")
      .min(4, "Min number is 4")
      .max(20, "Max number of chars is 20"),
    email: Yup.string()
      .required("Email Required")
      .min(4, "Min number is 4")
      .max(20, "Max number of chars is 20")
      .email("Not Valid Email"),
    password: Yup.string()
      .required("Password Required")
      .min(6, "Min number is 6")
      .max(20, "Max number of chars is 20"),
  });
  console.log(user);
  const handleSubmit = async (values, errors) => {
    props.setInputs(values);
    props.handleSubmit(values, errors);
  };
  const handleEstate = () => {
    navigate("/create-estate/create");
  };
  return (
    <div className="inner-inputs">
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
          <Form className="myForm2">
            <Form.Group className="mb-3 myInput2" controlId="formBasicName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                name="name"
                /* Set onChange to handleChange */
                onChange={handleChange}
                /* Set onBlur to handleBlur */
                onBlur={handleBlur}
                /* Store the value of this input in values.name, make sure this is named the same as the name property on the form element */
                value={values.name}
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

            <Form.Group className="mb-3 myInput2" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                name="email"
                /* Set onChange to handleChange */
                onChange={handleChange}
                /* Set onBlur to handleBlur */
                onBlur={handleBlur}
                /* Store the value of this input in values.name, make sure this is named the same as the name property on the form element */
                value={values.email}
                error={!!touched.email && !!errors.email}
                type="email"
                placeholder="Enter email"
                className={touched.email && errors.email ? "error2" : null}
                style={{ marginTop: "10px", marginBottom: "20px" }}
              />
              {touched.email && errors.email ? (
                <div className="error-message">
                  {errors.email}
                  {touched.email}
                </div>
              ) : (
                <div>
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </div>
              )}
              {/*  */}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                /* Set onChange to handleChange */
                onChange={handleChange}
                /* Set onBlur to handleBlur */
                onBlur={handleBlur}
                /* Store the value of this input in values.name, make sure this is named the same as the name property on the form element */
                value={values.password}
                type="password"
                placeholder="Password"
                className={
                  touched.password && errors.password ? "error2" : null
                }
                style={{ marginTop: "10px", marginBottom: "20px" }}
              />
              {touched.password && errors.password ? (
                <div className="error-message">{errors.password}</div>
              ) : null}
            </Form.Group>

            <Button className="auth-btn4" type="submit" onClick={handleSubmit}>
              Update
            </Button>
            <Button className="auth-btn3" type="submit" onClick={handleEstate}>
              CREATE ESTATE
            </Button>
            <div className="delete-inputs">
              <span onClick={() => props.handleDelete()}>Delete Acount</span>
              <span
                style={{ color: "green" }}
                onClick={() => props.setShowList(true)}
              >
                Show Estates
              </span>
              <span onClick={() => props.handleSignOut()}>Sign Out</span>
            </div>

            {/* <div style={{ marginTop: "10px" }}>
        Forgot youre password? <Link to={`/forgot`}>Click here</Link>
      </div> */}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ProfileInputs;
