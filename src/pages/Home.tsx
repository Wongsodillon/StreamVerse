import MainLayout from "@/layouts/MainLayout";
import Trending from "@/layouts/Trending";
import { BrowserRouter, Route, Routes } from "react-router-dom";


const Home = () => {
  return (
    <MainLayout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Trending/>} />
        </Routes>
      </BrowserRouter>
    </MainLayout>
  );
};

export default Home;

