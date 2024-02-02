import { Formik } from "formik";
import React from "react";
import { Button, Form } from "react-bootstrap";
import * as Yup from "yup";
import "./CreateRealEstate.css";
import CreateEstateInput from "./components/CreateEstateInput";
import ImageUpload from "./components/ImageUpload";
import CreateEstateCheckBox from "./components/CreateEstateCheckBox";
import {
  createEstateInitial,
  createEstateInitialValues,
  createEstateYup,
} from "../../helperFunctions";
import { apiCall } from "../../apiCall";
import { CREATE_ESTATE } from "../../URLS";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import { loadingAction } from "../../store/loadingSlice";
import { toastAction } from "../../store/toastSlice";
import { estateAction } from "../../store/estateSlice";

const CreateEstateIndex = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let { status } = useParams();
  const location = useLocation();
  const estate = location.state.estate;
  const estateHeadline = status === "create" ? "Create Estate" : "Edit Estate";
  const user = useSelector((state) => {
    return state.auth.user;
  });
  const validationSchema = createEstateYup;
  const handleSubmit = async (values) => {
    console.log("Form values:", values);
    const payload = { ...values, userId: user._id };
    dispatch(loadingAction.toggleLoading(true));
    await new Promise((resolve) => setTimeout(resolve, 2000));

    try {
      const data = await apiCall("FORM_DATA", CREATE_ESTATE, payload);
      if (data.status !== "ok") {
        dispatch(loadingAction.toggleLoading(false));
        dispatch(
          toastAction.setToast({
            errorMessage: data.msg,
            type: "error",
            show: true,
          })
        );
        return;
      }
      dispatch(loadingAction.toggleLoading(false));
      dispatch(
        toastAction.setToast({ errorMessage: data.msg, type: "success" })
      );
      dispatch(estateAction.setEstates(data.estates));
      navigate("/");
    } catch (error) {
      dispatch(loadingAction.toggleLoading(false));
      dispatch(toastAction.setToast({ errorMessage: "Error", type: "error" }));
    }
    // Add any additional logic or API calls here
  };
  const initialValues = createEstateInitialValues(estate);
  return (
    <div className="CreateEstateIndexMain">
      <div className="CreateEstateIndexMainHeader">
        <h2>{estateHeadline}</h2>
      </div>
      <div className="main-formik">
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
            setFieldValue,
            isSubmitting,
          }) => (
            <Form className="main-formik">
              <div className="CreateEstateLeft">
                <CreateEstateInput
                  name="name"
                  value={values.name}
                  error={touched.name && errors.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter Name"
                  as="input"
                  classValue="myInput3"
                />
                <CreateEstateInput
                  name="description"
                  value={values.description}
                  error={touched.description && errors.description}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter Description"
                  as="textarea"
                  classValue="myInput3"
                />
                <CreateEstateInput
                  name="address"
                  value={values.address}
                  error={touched.address && errors.address}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter Address"
                  as="input"
                  classValue="myInput3"
                />
                <CreateEstateCheckBox
                  value={values}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  touched={touched}
                  error={errors}
                  setFieldValue={setFieldValue}
                />
                <div className="small-inputs-main">
                  <CreateEstateInput
                    name="baths"
                    label="Baths"
                    value={values.baths}
                    error={touched.baths && errors.baths}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    as="input"
                    type="number"
                    classValue="small-input"
                  />
                  <CreateEstateInput
                    name="beds"
                    label="Beds"
                    value={values.beds}
                    error={touched.beds && errors.beds}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    as="input"
                    type="number"
                    classValue="small-input"
                  />{" "}
                  <CreateEstateInput
                    name="price"
                    label="Price"
                    value={values.price}
                    error={touched.price && errors.price}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    as="input"
                    type="number"
                    classValue="small-input"
                  />
                  {values.offer ? (
                    <CreateEstateInput
                      name="discount"
                      label="Discount"
                      value={values.discount}
                      error={touched.discount && errors.discount}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      as="input"
                      type="number"
                      classValue="small-input"
                    />
                  ) : null}
                </div>
              </div>
              <div className="CreateEstateRight">
                <ImageUpload
                  name="images"
                  label="Image"
                  value={values.images}
                  error={touched.images && errors.images}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter images"
                  as="input"
                  type="file"
                  setFieldValue={setFieldValue}
                />
                <Button
                  className="auth-btn"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <div className="CreateEstateleft"></div>
      <div className="CreateEstateright"></div>
    </div>
  );
};

export default CreateEstateIndex;
