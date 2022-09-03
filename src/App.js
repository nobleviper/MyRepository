import React from "react";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Board from "./Board";
import BoardWrite from "./BoardWrite";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/board" exact element={<Board />} />
          <Route path="/write" exact element={<BoardWrite />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
