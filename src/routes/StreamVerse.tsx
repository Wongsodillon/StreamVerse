import React from "react";
import { Routes, Route } from "react-router-dom";
import Categories from "@/pages/Home";
import Trending from "@/pages/Categories";
import Streaming from "../pages/Streaming/Streaming";

const StreamVerse = () => {
  return (
    <Routes>
      <Route path="/" element={<Streaming />} />
      <Route path="/category" element={<Categories />} />
      <Route path="/trending" element={<Trending />} />
    </Routes>
  );
};

export default StreamVerse;
