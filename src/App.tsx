import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import SelfIntroduction from "./pages/SelfIntroduction";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/self" element={<SelfIntroduction />} />
    </Routes>
  );
};
