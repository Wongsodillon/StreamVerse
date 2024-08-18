import Landing from "./pages/Landing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomeRoutes from "./routes/HomeRoutes";
import Streaming from "./pages/Streaming/Streaming";
import AuthPage from "./pages/Auth/AuthPage";
import { MetamaskContextProvider } from "./context/MetaMaskContext";
import GuestMiddleware from "./middleware/GuestMiddleware";
import Account from "./pages/Account/Account";
import MyChannel from "./pages/Streaming/MyChannel";

function App() {
  return (
    <BrowserRouter>
      <MetamaskContextProvider>
        <Routes>
          <Route
            path="/auth"
            element={
              <GuestMiddleware>
                <AuthPage />
              </GuestMiddleware>
            }
          />
          <Route path="/" element={<Landing />} />
          <Route path="/home/*" element={<HomeRoutes />} />
          <Route path="/stream/:topic_id" element={<Streaming />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </MetamaskContextProvider>
    </BrowserRouter>
  );
}

export default App;
