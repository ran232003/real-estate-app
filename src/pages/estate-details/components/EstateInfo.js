import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import Button from "react-bootstrap/Button";
import { FaBed } from "react-icons/fa";
import { FaBath } from "react-icons/fa";
import { FaParking } from "react-icons/fa";
import { FaChair } from "react-icons/fa";

const EstateInfo = (props) => {
  const {
    name,
    price,
    address,
    beds,
    baths,
    parking,
    furnished,
    rent,
    sell,
    description,
  } = props.estate;
  const rentOrSell = sell ? "For Sale" : "For Rent";
  return (
    <div className="info-main">
      <div className="info-header">
        <h2>
          {name} - {price.toLocaleString("en-US", { style: "decimal" })}
        </h2>
      </div>
      <div className="address-info">
        <span>
          <IoLocationOutline size={20} color="green" />
          {address}
        </span>
      </div>
      <div className="condition-info">
        {/* <span className="rent-sell">{rentOrSell}</span> */}
        <Button className="info-btn" variant="danger">
          {rentOrSell}
        </Button>
      </div>
      <div className="info-discription">
        <p>Description - {description}</p>
      </div>
      <div className="additional-info">
        {beds ? (
          <span style={{ color: "green" }}>
            <FaBed color="green" />
            &nbsp;
            {beds}&nbsp;Beds&nbsp;
          </span>
        ) : null}
        {baths ? (
          <span style={{ color: "green" }}>
            <FaBath color="green" />
            &nbsp;
            {baths}&nbsp;Baths&nbsp;
          </span>
        ) : null}
        {parking ? (
          <span style={{ color: "green" }}>
            <FaParking color="green" />
            &nbsp; Parking
          </span>
        ) : null}
        {furnished ? (
          <span style={{ color: "green" }}>
            <FaChair color="green" />
            &nbsp; Furnished&nbsp;
          </span>
        ) : null}
      </div>
    </div>
  );
};

export default EstateInfo;
