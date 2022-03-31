import { Col, Row } from "react-bootstrap";
import { MoviesList } from "../components/MoviesList";
import { useMovies } from "../hooks/useMovies";

export const Home = () => {

    const movies = useMovies();

    console.log(movies);
    return (
        <main>
            <MoviesList movies={movies} />
        </main>
    );
}