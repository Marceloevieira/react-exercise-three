import { Route, Routes } from "react-router-dom";
import { Home } from "../views/Home";
import { Movie } from "../views/Movie";
import { NotFound } from "../views/NotFound";

export const ApplicationRoutes = () => (

    <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/movie/:id" exact element={<Movie />}/>
        <Route path="*" element={<NotFound />} />
    </Routes>

);