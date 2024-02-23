import React, { useEffect, useRef, useState } from "react";
import "../Profile.css";
import { useSelector } from "react-redux";
const ProfileImage = (props) => {
  const user = props.user;
  const [file, setFile] = useState(undefined);
  const fileRef = useRef(null);
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    // setFile(selectedFile);
    setFile(selectedFile);
    props.setFile(selectedFile);
    // Create a URL for the selected file and set it as the src for the img tag
    const imageUrl = URL.createObjectURL(selectedFile);
    document.getElementById("image-preview").src = imageUrl;
  };
  //console.log(user);
  useEffect(() => {
    if (user.image) {
      document.getElementById("image-preview").src = user.image;
    }
  }, []);
  return (
    <div className="profile-head-image">
      <div className="profile-headeline">
        <h2>Profile</h2>
      </div>
      <div className="test">
        <input
          ref={fileRef}
          onChange={handleFileChange}
          type="file"
          hidden
          accept="image/*"
        />

        <img
          onClick={() => fileRef.current.click()}
          src={require("../download.jpeg")}
          alt="profile"
          className="image-profile-pic"
          id="image-preview"
        />
      </div>
    </div>
  );
};

export default ProfileImage;
