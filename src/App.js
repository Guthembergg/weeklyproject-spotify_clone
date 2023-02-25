import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Player from "./components/Player";
import Album from "./components/Album";
import Artist from "./components/Artist";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/album/:id" element={<Album />}></Route>
          <Route path="/artist/:id" element={<Artist />}></Route>
        </Routes>
        <Player />
      </BrowserRouter>
    </div>
  );
}

export default App;
