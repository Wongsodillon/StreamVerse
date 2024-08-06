import React from "react";
import { Routes, Route } from "react-router-dom";
import Categories from "@/layouts/Categories";
import Trending from "@/layouts/Trending";
import Streaming from "./Streaming";

const StreamVerse = () => {
  return (
    <Routes>
      <Route path="/category" element={<Categories />} />
      <Route path="/trending" element={<Trending/>} />
    </Routes>
  );
};

export default StreamVerse;
