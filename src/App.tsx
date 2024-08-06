import Landing from "./pages/Landing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Streaming from "./pages/Streaming";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home/*" element={<Home />} />
        <Route path="/streaming" element={<Streaming />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
