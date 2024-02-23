import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaRegUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { SEARCH_ESTATES } from "../URLS";
import { apiCall } from "../apiCall";
import { estateAction } from "../store/estateSlice";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";

const NavigationBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [input, setInput] = useState("");
  const user = useSelector((state) => {
    return state.auth.user;
  });
  const handleChange = (e) => {
    const val = e.target.value;
    setInput(val);
  };
  const handleSubmit = async () => {
    console.log(input);
    const url = new URL(SEARCH_ESTATES);

    // Add parameters to the URL

    url.searchParams.append("search", input);

    // You can use paramsString in your URL or log it to see the result
    console.log(url);
    const data = await apiCall("GET", url.href);
    if (data.status !== "ok") {
      return;
    }
    dispatch(estateAction.setEstates(data.estates));
    navigate("/search", {
      state: { check: true },
    });
  };
  return (
    <Navbar
      expand="lg"
      bg="dark"
      className="bg-body-tertiary"
      data-bs-theme="dark"
    >
      <Container fluid>
        <Navbar.Brand as={Link} to={"/"}>
          RanEstate
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to={"/"}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to={"/about"}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to={"/search"}>
              Search
            </Nav.Link>
            {user ? (
              <Nav.Link as={Link} to={"/profile"}>
                <FaRegUserCircle
                  as={Link}
                  to={"/profile"}
                  style={{ cursor: "pointer" }}
                  size={20}
                />
              </Nav.Link>
            ) : (
              <Nav.Link as={Link} to={"/auth/login"}>
                Sign In
              </Nav.Link>
            )}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={handleChange}
              value={input}
            />
            <Button variant="outline-success" onClick={handleSubmit}>
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
