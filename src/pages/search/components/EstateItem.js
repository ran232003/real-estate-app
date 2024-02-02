import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { IoLocationOutline } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";

function EstateItem(props) {
  const navigate = useNavigate();
  const { address, price, beds, baths, images, name } = props.estate;
  const imgSrc = images.length > 0 ? images[0] : require("./house.jpg");
  const handleClick = () => {
    navigate(`/estate-details/${props.estate._id}`, {
      state: { estate: props.estate },
    });
  };

  return (
    <Card
      onClick={handleClick}
      style={{
        width: "18rem",
        marginRight: "20px",
        marginTop: "20px",
        cursor: "pointer",
      }}
    >
      <Card.Img style={{ height: "150px" }} variant="top" src={imgSrc} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text style={{ fontSize: "12px" }}>
          <span>
            <IoLocationOutline size={20} color="green" />
            {address}
          </span>
          <br />
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <h5 style={{ color: "green" }}>
          ${price.toLocaleString("en-US", { style: "decimal" })}
        </h5>
        <span>
          <b>{beds}&nbsp;Beds&nbsp;</b>
        </span>
        <span>
          <b>{baths}&nbsp; Baths</b>
        </span>
      </Card.Body>
    </Card>
  );
}

export default EstateItem;
