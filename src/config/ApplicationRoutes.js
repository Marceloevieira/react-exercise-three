import { Route, Routes } from "react-router-dom";
import { About } from "../views/About";
import { Home } from "../views/Home";
import { NotFound } from "../views/NotFound";

export const ApplicationRoutes = () => (

    <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />}/>
        <Route path="*" element={<NotFound />} />
    </Routes>

);