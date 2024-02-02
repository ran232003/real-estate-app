// CreateEstateInput.js
import React, { useState } from "react";
import { Form } from "react-bootstrap";

const ImageUpload = ({
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
}) => {
  const [images, setImages] = useState([]);
  const handleChange = (e) => {
    const selectedImages = Array.from(e.target.files);
    console.log(selectedImages);
    // Check if adding the new images exceeds the limit
    if (images.length + selectedImages.length <= 6) {
      console.log("in if");
      setFieldValue("images", [...selectedImages]);
      setImages([...selectedImages]);
    } else {
      console.log("in else");
      setImages([]);
      setFieldValue("images", []);

      // You can handle the case where the limit is exceeded, e.g., show a message
      console.log("Exceeded the maximum number of images (6)");
    }
  };
  const imgSrc = images.length > 0 ? images[0] : "";
  console.log(images[0]);
  return (
    <div>
      <h5 style={{ marginBottom: "20px" }}>
        Images: The first image will be the cover (max 6)
      </h5>
      <Form.Group className="mb-3 " controlId={`formBasic${name}`}>
        <Form.Control
          name={name}
          onChange={handleChange}
          onBlur={onBlur}
          type={type}
          placeholder={placeholder}
          style={{ marginTop: "10px", marginBottom: "20px" }}
          as={as}
          accept="image/*"
          multiple
        />
        {error ? (
          <div className="error-message">{error}</div>
        ) : (
          <div>
            <Form.Text className="text-muted"></Form.Text>
          </div>
        )}
      </Form.Group>
      <div>
        {images[0] ? (
          <img
            src={URL.createObjectURL(images[0])}
            alt="profile"
            className="image-profile-pic"
            id="image-preview"
          />
        ) : null}
      </div>
    </div>
  );
};

export default ImageUpload;
