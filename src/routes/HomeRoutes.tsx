import Home from "@/pages/Home";
import { Route, Routes } from "react-router-dom";
import Categories from "@/pages/Categories";

const HomeRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category" element={<Categories />} />
    </Routes>
  );
};

export default HomeRoutes;
