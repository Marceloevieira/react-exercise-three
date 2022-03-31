import { useEffect, useState } from "react"
import { MovieService } from "../services/MoviesService";

export const useMovies = () => {

    const [movies, setMovies] = useState([]);


    const requestMovies = async () => {
        const {
            data: { results },
        } = await MovieService.getMovies();

        setMovies(results);
    }


    useEffect(() => {
        requestMovies();
    }, [])

    return movies
}