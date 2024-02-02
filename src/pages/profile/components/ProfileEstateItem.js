import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const ProfileEstateItem = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { images, name } = props.estate;
  console.log(images);

  const HandleEdit = () => {
    navigate("/create-estate/edit", {
      state: { estate: props.estate },
    });
  };
  return (
    <div className="ProfileEstateItem">
      <div className="profileImage">
        <img
          src={images[0]}
          alt="profile"
          className="image-profile-pic2"
          id="image-preview"
        />
      </div>
      <div className="profileName">
        <h5>{name}</h5>
      </div>
      <div className="profileButtons">
        <div
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => props.handleDelete()}
        >
          Delete
        </div>
        <div
          style={{ color: "green", cursor: "pointer" }}
          onClick={() => HandleEdit()}
        >
          Edit
        </div>
      </div>
    </div>
  );
};

export default ProfileEstateItem;
