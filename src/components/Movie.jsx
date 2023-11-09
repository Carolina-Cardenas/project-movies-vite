import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import './Movie.css'

export const Movie = () => {
  useEffect(() => {
    fetchMovies();
  }, []);

  const [movies, setMovies] =useState([])

  const url = "https://api.themoviedb.org/3/movie/popular?api_key=432fbe8327d23760a3e88a6c24652d16&language=en-US&page=1"
  const fetchMovies = async () => {

    const moviesResponse = await fetch(url);
    const moviesData = await moviesResponse.json();
    const films = moviesData.results
    setMovies(films);
    console.log(films)
  };
  return (
      <div className="moviePage">

      {movies.map((movie) => (
        <Link key={movie.id} to={`/detail/${movie.id}`}>
          <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />

          <div className="details">
            <h1>{movie.title}</h1>
            <p>Released {movie.release_date}</p>
          </div>
        </Link>
      ))}
    </div>



  )
}
