import { useState } from "react";
import Landing from "./Page/Landing";
import Stream from "./Page/Stream";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/watch/*" element={<Stream/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
