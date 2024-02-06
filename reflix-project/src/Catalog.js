import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Catalog = ({ users, moviesData, setMoviesData }) => {
  const [budget, setBudget] = useState(10);

  return (
    <div className="catalog">
      {/* Search bar, Catalog section, and budget */}
      <h1>Catalog Page</h1>
      <div>Search Bar</div>
      <div>Catalog Section</div>
      <div>Budget: {budget}</div>

      {/* Movie list */}
      {moviesData.map(movie => (
        <div key={movie.id} className="movie">
          <img src={movie.img} alt={movie.title} />
          <h3>{movie.title}</h3>
          <p>{movie.year}</p>
          <p>{movie.descrShort}</p>
          <button onClick={() => handleRentMovie(movie)}>Rent</button>
          <Link to={`/movies/${movie.id}`}>Details</Link>
        </div>
      ))}
    </div>
  );

  function handleRentMovie(movie) {
    if (!movie.isRented && budget > 0) {
      setMoviesData(prevMovies => (
        prevMovies.map(prevMovie => (
          prevMovie.id === movie.id ? { ...prevMovie, isRented: true } : prevMovie
        ))
      ));
      setBudget(prevBudget => prevBudget - 1);
    } else if (movie.isRented) {
      setMoviesData(prevMovies => (
        prevMovies.map(prevMovie => (
          prevMovie.id === movie.id ? { ...prevMovie, isRented: false } : prevMovie
        ))
      ));
      setBudget(prevBudget => prevBudget + 1);
    }
  }
}

export default Catalog;
