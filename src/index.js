import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./Components/Header/Header";
import TvShow from "./Components/TVShow/TvShow";
import TvDetails from "./Components/tvshowdetails/TvDetails";
import Signup from "./Components/Signup/Signup";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/tv" element={<TvShow />} />
      <Route path="/tvdetails/:id" element={<TvDetails />} />
    </Routes>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
