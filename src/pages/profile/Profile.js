import React, { useState } from "react";
import ProfileImage from "./components/ProfileImage";
import ProfileInputs from "./components/ProfileInputs";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadingAction } from "../../store/loadingSlice";
import { toastAction } from "../../store/toastSlice";
import { authAction } from "../../store/authSlice";
import { DELETE_USER, UPDATE_USER } from "../../URLS";
import { apiCall } from "../../apiCall";
import ProfileEstateList from "./components/ProfileEstateList";

const Profile = () => {
  const auth = useSelector((state) => {
    return state.auth;
  });
  const { user, estates } = auth;
  const [file, setFile] = useState(undefined);
  const [inputs, setInputs] = useState(undefined);
  const [showList, setShowList] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = async (values, errors) => {
    try {
      console.log(values);
      let data;
      dispatch(loadingAction.toggleLoading(true));
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const payload = { file: file, ...values };
      const url = file ? UPDATE_USER : UPDATE_USER + "-no-image";
      const method = file ? "FORM_DATA" : "POST";
      data = await apiCall(method, url, payload);

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
      dispatch(authAction.setUser(data.user));
      // navigate("/");
    } catch (error) {
      dispatch(loadingAction.toggleLoading(false));
    }
  };
  const handleDelete = async () => {
    try {
      console.log(user);
      let data;
      dispatch(loadingAction.toggleLoading(true));
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const url = DELETE_USER + `/${user._id}`;
      data = await apiCall("DELETE", url, url);

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
      dispatch(authAction.setUser(data.user));
      navigate("/");
    } catch (error) {
      dispatch(loadingAction.toggleLoading(false));
    }
  };
  const handleSignOut = async () => {
    dispatch(loadingAction.toggleLoading(true));
    await new Promise((resolve) => setTimeout(resolve, 2000));
    dispatch(authAction.setUser(null));
    dispatch(loadingAction.toggleLoading(false));

    navigate("/");
  };
  const handleShowEstate = () => {};
  return (
    <div className="main-profile">
      <ProfileImage user={user} file={file} setFile={setFile} />
      <ProfileInputs
        handleDelete={handleDelete}
        handleSignOut={handleSignOut}
        setInputs={setInputs}
        user={user}
        handleSubmit={handleSubmit}
        setShowList={setShowList}
      />
      {showList ? <ProfileEstateList estates={estates} /> : null}
    </div>
  );
};

export default Profile;
