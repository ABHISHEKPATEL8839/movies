import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Header";
import Home from "../pages/Home";
import AddMovie from "../pages/AddMovie";

function AllRoute() {
  return (
   <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddMovie />} />
      </Routes>
   </>
  );
}

export default AllRoute;