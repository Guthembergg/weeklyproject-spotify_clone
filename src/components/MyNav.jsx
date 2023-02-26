import { Col, Container, Form, Nav, Row } from "react-bootstrap";
import { FaHome } from "react-icons/fa";
import { BsFillBookFill } from "react-icons/bs";
import logo from "../assets/logo/Spotify_Logo.png";
import { useDispatch } from "react-redux";
import { useState } from "react";
const MyNav = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
    e.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "SEARCH", payload: query });
  };

  return (
    <>
      <Container>
        <Row>
          <Col xs={2}>
            <Nav
              className="navbar navbar-expand-md navbar-white bg-navbar fixed-left justify-content-between p-3 align-items-center"
              id="sidebar"
            >
              <div className="nav-container mt-2">
                <a className="navbar-brand" href="/">
                  <img src={logo} alt="Spotify_Logo" width="131" height="40" />
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarNavAltMarkup"
                  aria-controls="navbarNavAltMarkup"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarNavAltMarkup"
                >
                  <div className="navbar-nav">
                    <ul>
                      <li>
                        <a className="nav-item nav-link mt-4" href="/">
                          <FaHome />
                          &nbsp; Home
                        </a>
                      </li>
                      <li>
                        <a className="nav-item nav-link " href="#hgf">
                          <BsFillBookFill />
                          &nbsp; Your Library
                        </a>
                      </li>
                      <li>
                        <Form
                          className="input-group mt-5"
                          onSubmit={handleSubmit}
                        >
                          <Form.Control
                            type="search"
                            value={query}
                            onChange={handleChange}
                            placeholder="search"
                          />

                          <button
                            className="btn btn-outline-secondary"
                            type="submit"
                            id="button-addon1"
                          >
                            GO
                          </button>
                        </Form>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="nav-btn d-flex flex-column ">
                <button className="btn signup-btn" type="button">
                  Sign Up
                </button>
                <button className="btn login-btn" type="button">
                  Login
                </button>
                <div className="d-flex ms-3">
                  <a href="#g">Cookie Policy</a> |<a href="#gg"> Privacy</a>
                </div>
              </div>
            </Nav>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MyNav;
