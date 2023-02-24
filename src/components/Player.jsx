import { Col, Container, ProgressBar, Row } from "react-bootstrap";
import Shuffle from "../assets/playerbuttons/Shuffle.png";
import Previous from "../assets/playerbuttons/Previous.png";
import Play from "../assets/playerbuttons/Play.png";
import Next from "../assets/playerbuttons/Next.png";
import Repeat from "../assets/playerbuttons/Repeat.png";

const Player = () => {
  return (
    <>
      <div className="container-fluid fixed-bottom bg-container pt-1 ">
        <Row className="row">
          <Col xs={12} className="col-lg-10 offset-lg-1">
            <Row className="row ">
              <Col className="col-1 col-md-1 col-lg-1 offset-3 offset-md-4 offset-lg-6 playerControls mt-1">
                <Row className="row d-flex flex-row flex-nowrap ">
                  <a href="#h" className="p-0">
                    <img src={Shuffle} alt="shuffle" />
                  </a>
                  <a href="#h" className="p-0">
                    <img src={Previous} alt="shuffle" />
                  </a>
                  <a href="#h" className="p-0">
                    <img src={Play} alt="shuffle" />
                  </a>
                  <a href="#h" className="p-0">
                    <img src={Next} alt="shuffle" />
                  </a>
                  <a href="#g" className="p-0">
                    <img src={Repeat} alt="shuffle" />
                  </a>
                </Row>
              </Col>
            </Row>
            <Row className="row justify-content-center offset-lg-2  playBar pt-3 mt-2">
              <Col className="col-8 col-md-8">
                <ProgressBar className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="0"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </ProgressBar>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default Player;
