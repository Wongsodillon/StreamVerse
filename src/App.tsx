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
          <Route path="/ok" element={<Landing />} />
          <Route path="/Admin/*" element={<Stream/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
