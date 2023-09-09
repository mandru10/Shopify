import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import All from './pages/All'
import Men from './pages/Men'
import Women from "./pages/Women";
import Unisex from "./pages/Unisex";
import Sets from "./pages/Sets";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact component={Home}></Route>
          <Route path="/all" component={All}></Route>
          <Route path="/men" component={Men}></Route>
          <Route path="/women" component={Women}></Route>
          <Route path="/unisex" component={Unisex}></Route>
          <Route path="/sets" component={Sets}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;