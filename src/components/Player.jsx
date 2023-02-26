import { Col, ProgressBar, Row } from "react-bootstrap";
import Shuffle from "../assets/playerbuttons/Shuffle.png";
import Previous from "../assets/playerbuttons/Previous.png";
import Play from "../assets/playerbuttons/Play.png";
import Next from "../assets/playerbuttons/Next.png";
import Repeat from "../assets/playerbuttons/Repeat.png";
import { useSelector } from "react-redux";

const Player = () => {
  const track = useSelector((state) => state.player[0]);

  return (
    <>
      <div className="container-fluid fixed-bottom bg-container pt-1 ">
        <Row className="row">
          <Col xs={12} className="col-lg-10 offset-lg-1 ">
            <Row className="row ">
              <Col xs={6} className="">
                {track && (
                  <>
                    <div className="d-flex  offset-md-1 offset-lg-4 align-items-center mt-1">
                      <img
                        src={track.album.cover_medium}
                        alt="song"
                        className=""
                        style={{ width: "70px" }}
                      />
                      <div className="d-flex flex-column">
                        <p className="fs-5 text-white ms-3 p-0 m-0 scrittaPlayer">
                          {track.title}
                        </p>
                        <p className="fs-6 text-white ms-3 p-0 m-0 scrittaPlayer2">
                          {track.artist.name}
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </Col>
              <Col className="col-1 col-md-1 col-lg-1 playerControls mt-1 d-flex ">
                <Row className="row d-flex flex-column flex-nowrap ">
                  <div className="d-flex">
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
                  </div>
                  <Col className="mt-4">
                    <Row className="row    playBar ">
                      <ProgressBar className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow="0"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </ProgressBar>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default Player;
