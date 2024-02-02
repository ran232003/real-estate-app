import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./components.css";

const MySlide = (props) => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  const { images } = props;

  return (
    <Carousel className="car" activeIndex={index} onSelect={handleSelect}>
      {images.map((imageUrl, i) => (
        <Carousel.Item key={i}>
          <img
            className="myImage"
            src={require(imageUrl)}
            alt={`Slide ${i + 1}`}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default MySlide;
