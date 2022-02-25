import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/Home/index";
import { Social } from "../pages/Social";

export const ApplicationRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/social" element={<Social />} />
    </Routes>
  );
};
