import { Col, Row } from "react-bootstrap";
import { useState } from "react";

const Home = () => {
  let rockArtists = [
    "queen",
    "u2",
    "thepolice",
    "eagles",
    "thedoors",
    "oasis",
    "thewho",
    "bonjovi",
  ];

  let popArtists = [
    "maroon5",
    "coldplay",
    "onerepublic",
    "jamesblunt",
    "katyperry",
    "arianagrande",
  ];

  let hipHopArtists = ["eminem", "snoopdogg", "lilwayne", "drake", "kanyewest"];

  let headers = new Headers({
    // sets the headers
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    "X-RapidAPI-Key": "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
  });

  const search = async () => {
    let div = document.querySelector("#searchResults .row");
    div.innerHTML = "";
    let searchQuery = document.querySelector("#searchField").value; // gets the value from the search box

    if (searchQuery.length > 2) {
      //if there's a value in the search box => fetch the information from rapidapi & display the result
      document.querySelector("#searchResults").style.display = "block";

      try {
        let response = await fetch(
          "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
            searchQuery,
          {
            method: "GET",
            headers,
          }
        ); // gets the information

        if (response.ok) {
          let result = await response.json(); // transforms the response to json
          let songs = result.data; // gets the songs info

          for (let x = 0; x < result.data.length; x++) {
            div.innerHTML += albumCard(result.data[x]);
          }
        } else {
          console.log("error");
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      //else just hide the section!
      document.querySelector("#searchResults").style.display = "none";
    }
  };

  function albumCard(songInfo) {
    // songInfo represents the info for the current song
    // creating the wrapper div
    return `
          <div class="col text-center" id=${songInfo.id}>
            <a href="/album_page.html?id=${songInfo.album.id}">
              <img class="img-fluid" src=${
                songInfo.album.cover_medium
              } alt="1" />
            </a>
            <p>
              <a href="/album_page.html?id=${songInfo.album.id}">
                Album: "${
                  songInfo.album.title.length < 16
                    ? `${songInfo.album.title}`
                    : `${songInfo.album.title.substring(0, 16)}...`
                }"<br>
              </a>
              <a href="/artist_page.html?id=${songInfo.artist.id}">
                Artist: ${songInfo.artist.name}
              </a>
            </p>
          </div>`;
  }

  const handleArtist = async (artistName, domQuerySelector) => {
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
        let div = document.querySelector(domQuerySelector);
        div.innerHTML += albumCard(songInfo[0]); // create a new album tyle
      } else {
        console.log("error");
      }
    } catch (err) {
      console.log(err);
    }
  };

  window.onload = async () => {
    let rockRandomArtists = [];
    let popRandomArtists = [];
    let hipHopRandomArtists = [];

    document.querySelector("#searchField").value = ""; // empties search field on page load

    while (rockRandomArtists.length < 4) {
      // pushes elements inside the array until it has 4 strings
      let artist = rockArtists[Math.floor(Math.random() * rockArtists.length)]; // select an element from the array with an index between 0 and 7
      if (!rockRandomArtists.includes(artist)) {
        // checks if the artist is not already present in the array
        rockRandomArtists.push(artist); // pushes the artist in the array
      }
    }

    while (popRandomArtists.length < 4) {
      let artist = popArtists[Math.floor(Math.random() * popArtists.length)];
      if (!popRandomArtists.includes(artist)) {
        popRandomArtists.push(artist);
      }
    }

    while (hipHopRandomArtists.length < 4) {
      let artist =
        hipHopArtists[Math.floor(Math.random() * hipHopArtists.length)];
      if (!hipHopRandomArtists.includes(artist)) {
        hipHopRandomArtists.push(artist);
      }
    }

    for (let j = 0; j < rockRandomArtists.length; j++)
      await handleArtist(rockRandomArtists[j], "#rockSection");

    for (let k = 0; k < popRandomArtists.length; k++)
      await handleArtist(popRandomArtists[k], "#popSection");

    for (let l = 0; l < hipHopRandomArtists.length; l++)
      await handleArtist(hipHopRandomArtists[l], "#hipHopSection");
  };

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
        <Row className="row m-0">
          <Col className="col-10">
            <div id="searchResults" style={{ display: "none" }}>
              <h2>Search Results</h2>
              <Row className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"></Row>
            </div>
          </Col>
        </Row>
        <Row className="row m-0">
          <Col className="col-10 p-0">
            <div id="rock">
              <h2>Rock classics</h2>
              <Row
                className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                id="rockSection"
              ></Row>
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
              ></Row>
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
