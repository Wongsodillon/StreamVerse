import Landing from "./pages/Landing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomeRoutes from "./routes/HomeRoutes";
import Streaming from "./pages/Streaming";
import AuthPage from "./pages/Auth/AuthPage";
import { UserProvider } from "./context/UserContext";
import { MetamaskContextProvider } from "./context/MetaMaskContext";
import GuestMiddleware from "./middleware/GuestMiddleware";
import Account from "./pages/Account/Account";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
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
            <Route path="/streaming/:user" element={<Streaming />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </MetamaskContextProvider>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
