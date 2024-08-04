import React from "react";
import { Routes, Route } from "react-router-dom";
import Trending from "@/layouts/Trending";

const StreamVerse = () => {
  return (
    <Routes>
      <Route path="/" element={<Trending />} />
    </Routes>
  );
};

export default StreamVerse;
