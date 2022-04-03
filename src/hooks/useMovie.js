import { useEffect, useState } from "react"
import { MovieService } from "../services/MovieService";

export const useMovie = (id) => {

    const [movie, setMovie] = useState([]);


    const requestMovie = async (id) => {
        const {
            data
        } = await MovieService.getMovie(id);


        setMovie(data);
    }


    useEffect(() => {
        requestMovie(id);
    }, [])

    return movie
}