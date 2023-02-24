import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Player from "./components/Player";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNav />

        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>{" "}
      <Player />
    </div>
  );
}

export default App;
