import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./components.css";

const Slide = (props) => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  const { images, myCssClass } = props;

  return (
    <Carousel
      className={myCssClass}
      activeIndex={index}
      onSelect={handleSelect}
    >
      {images.map((imageUrl, i) => (
        <Carousel.Item key={i}>
          {/* Check if the URL is local or from the internet */}
          {imageUrl.startsWith(".") || imageUrl.startsWith("/") ? (
            <img
              className="myImage"
              src={require(`${imageUrl}`)}
              alt={`Slide ${i + 1}`}
            />
          ) : (
            <img className="myImage" src={imageUrl} alt={`Slide ${i + 1}`} />
          )}
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slide;
