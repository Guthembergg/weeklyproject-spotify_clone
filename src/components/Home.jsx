import { Col, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
const Home = () => {
  // const [music, setMusic] = useState([]);
  const dispatch = useDispatch();
  const music = useSelector((state) => state.music);
  const search = useSelector((state) => state.search);
  const search_music = useSelector((state) => state.music_search[0]);

  let rockArtists = ["queen", "u2", "radiohead"];
  let popArtists = ["maroon5", "coldplay", "onerepublic"];
  let hipHopArtists = ["eminem", "snoopdogg", "lilwayne"];

  let headers = new Headers({
    // sets the headers
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    "X-RapidAPI-Key": "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
  });

  const handleArtist = async (artistName) => {
    // artistName = "eminem", "metallica", etc...
    // domQuerySelector = "#rockSection" etc...
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
          artistName,
        {
          method: "GET",
          headers,
        }
      ); // gets the information
      if (response.ok) {
        let result = await response.json(); // transforms the response to json
        let songInfo = result.data;
        console.log(songInfo);
        dispatch({
          type: "ADD_MUSIC",
          payload: songInfo.filter((el, i) => i < 4),
        });
      } else {
        console.log("error");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleSearch = async (artistName) => {
    // artistName = "eminem", "metallica", etc...
    // domQuerySelector = "#rockSection" etc...
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
          artistName,
        {
          method: "GET",
          headers,
        }
      ); // gets the information
      if (response.ok) {
        let result = await response.json(); // transforms the response to json
        let songInfo = result.data;
        console.log(songInfo);
        dispatch({
          type: "ADD_MUSIC_SEARCH",
          payload: songInfo.filter((el, i) => i < 8),
        });
      } else {
        console.log("error");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    rockArtists.map(async (el) => await handleArtist(el));
    popArtists.map((el) => handleArtist(el));

    // handleArtist("harry");
    console.log(music);
  }, []);

  useEffect(() => {
    handleSearch(search);
  }, [search]);

  return (
    <>
      <Col className="col-12 col-md-8 offset-md-3 mainPage">
        <Row className="row ">
          <Col className="col-9 col-lg-11 mainLinks d-none d-md-flex">
            <a href="#t">TRENDING</a>
            <a href="#t">PODCAST</a>
            <a href="#t">MOODS AND GENRES</a>
            <a href="#t">NEW RELEASES</a>
            <a href="#t">DISCOVER</a>
          </Col>
        </Row>

        {search_music && (
          <Row className="row m-0">
            <Col className="col-10">
              <div id="searchResults">
                <h2>Search Results</h2>
                <Row className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
                  {search_music.map((el, i) => (
                    <div
                      key={`music-${i}`}
                      className="col text-center"
                      id={el?.id}
                    >
                      <a href={`/album/${el?.album?.id}`}>
                        <img
                          className="img-fluid"
                          src={el?.album?.cover_medium}
                          alt="1"
                        />
                      </a>
                      <p>
                        <a href={`/album/${el?.album?.id}`}>
                          {el?.album?.title?.length < 16
                            ? el?.album?.title
                            : el?.album?.title.substring(0, 16)}
                        </a>
                        <br></br>
                        <a href={`/artist/${el?.artist?.id}`}>
                          {el?.artist?.name}
                        </a>
                      </p>
                    </div>
                  ))}
                </Row>
              </div>
            </Col>
          </Row>
        )}

        <Row className="row m-0">
          <Col className="col-10 p-0">
            <div id="rock">
              <h2>Rock classics</h2>
              <Row
                className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                id="rockSection"
              >
                {music
                  ?.filter((el, i) => i < 12)
                  .map((el, i) => (
                    <div
                      key={`music-${i}`}
                      className="col text-center"
                      id={el?.id}
                    >
                      <a href={`/album/${el?.album?.id}`}>
                        <img
                          className="img-fluid"
                          src={el?.album?.cover_medium}
                          alt="1"
                        />
                      </a>
                      <p>
                        <a href={`/album/${el?.album?.id}`}>
                          {el?.album?.title?.length < 16
                            ? el?.album?.title
                            : el?.album?.title.substring(0, 16)}
                        </a>
                        <br></br>
                        <a href={`/artist/${el?.artist?.id}`}>
                          {el?.artist?.name}
                        </a>
                      </p>
                    </div>
                  ))}
              </Row>
            </div>
          </Col>
        </Row>
        <Row className="row m-0">
          <Col className="col-10  p-0">
            <div id="pop">
              <h2>Pop Culture</h2>
              <Row
                className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                id="popSection"
              >
                {music
                  ?.filter((el, i) => i > 12 && i < 25)
                  .map((el, i) => (
                    <div
                      key={`pop-${i}`}
                      className="col text-center"
                      id={el?.id}
                    >
                      <a href={`/album/${el?.album?.id}`}>
                        <img
                          className="img-fluid"
                          src={el?.album?.cover_medium}
                          alt="1"
                        />
                      </a>
                      <p>
                        <a href={`/album/${el?.album?.id}`}>
                          {el?.album?.title?.length < 16
                            ? el?.album?.title
                            : el?.album?.title.substring(0, 16)}
                        </a>
                        <br></br>
                        <a href={`/artist/${el?.artist?.id}`}>
                          {el?.artist?.name}
                        </a>
                      </p>
                    </div>
                  ))}
              </Row>
            </div>
          </Col>
        </Row>
        <Row className="row m-0">
          <Col className="col-10  p-0">
            <div id="hiphop">
              <h2>#HipHop</h2>
              <Row
                className="row m-0 row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                id="hipHopSection"
              ></Row>
            </div>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default Home;
