import React, { useRef, useState } from "react";
import { Button } from "react-bootstrap";

const ImageInputs = ({ onSubmit, images, setImages }) => {
  const inputRef = useRef(null);

  // Your ImageInputs component logic here
  const handleImageChange = (e) => {
    const selectedImages = Array.from(e.target.files);
    console.log(selectedImages);
    // Check if adding the new images exceeds the limit
    if (images.length + selectedImages.length <= 6) {
      console.log("in if");

      setImages([...selectedImages]);
    } else {
      console.log("in else");
      setImages([]);
      inputRef.current.value = "";
      // You can handle the case where the limit is exceeded, e.g., show a message
      console.log("Exceeded the maximum number of images (6)");
    }
  };
  console.log(images);
  return (
    <div className="image-inputs-main">
      <span>Images: The first image will be the cover (max 6)</span>
      {/* Your image input components */}

      <div>
        <input
          ref={inputRef}
          className="p-3 border border-gray-300 rounded w-full"
          type="file"
          id="images"
          accept="image/*"
          multiple
          onClick={handleImageChange}
        />
      </div>

      <Button className="auth-btn" type="submit" onClick={onSubmit}>
        Submit
      </Button>
    </div>
  );
};

export default ImageInputs;
