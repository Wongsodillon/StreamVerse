import React from "react";
import { Routes, Route } from "react-router-dom";
import Trending from "@/layouts/Trending";
import Streaming from "./Streaming";

const StreamVerse = () => {
  return (
    <Routes>
      <Route path="/" element={<Trending />} />
    </Routes>
  );
};

export default StreamVerse;
