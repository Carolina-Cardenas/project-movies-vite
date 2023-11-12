import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Movie } from "./Movie";
import { Detail } from "./Detail";

export const routes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie" element={<Movie />} />
      <Route path="/detail/:id" element={<Detail />} />
    </Routes>
  );
};
