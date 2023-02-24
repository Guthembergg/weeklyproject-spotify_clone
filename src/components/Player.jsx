import { Col, Container, ProgressBar, Row } from "react-bootstrap";

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
                    <img
                      src="./assets/playerbuttons/Shuffle.png"
                      alt="shuffle"
                    />
                  </a>
                  <a href="#h" className="p-0">
                    <img
                      src="./assets/playerbuttons/Previous.png"
                      alt="shuffle"
                    />
                  </a>
                  <a href="#h" className="p-0">
                    <img src="./assets/playerbuttons/Play.png" alt="shuffle" />
                  </a>
                  <a href="#h" className="p-0">
                    <img src="./assets/playerbuttons/Next.png" alt="shuffle" />
                  </a>
                  <a href="#g" className="p-0">
                    <img
                      src="./assets/playerbuttons/Repeat.png"
                      alt="shuffle"
                    />
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
