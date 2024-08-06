import Landing from "./pages/Landing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomeRoutes from "./routes/HomeRoutes";
import Streaming from "./pages/Streaming";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home/*" element={<HomeRoutes />} />
        <Route path="/streaming/:user" element={<Streaming />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
