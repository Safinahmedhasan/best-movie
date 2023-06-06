import { useEffect, useState } from "react";
import MovieCard from "../MovieCard/MovieCard";


const Home = () => {
    const [movies, seMovies] = useState([])
    console.log(movies);

    useEffect(() => {
        fetch('MovieData.json')
        .then(res => res.json())
        .then(data => {
            seMovies(data);
        })
    }, [])

    return (
        <div>
           {
            movies.map(movie => <MovieCard
            
                key={movie.id}
                movie={movie}
            ></MovieCard>)
           }
        </div>
    );
};

export default Home;