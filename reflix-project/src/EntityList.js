import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const EntityList = ({ entities, category }) => {
  const [rentedMovies, setRentedMovies] = useState([]);

  const rentMovie = (movie) => {
    setRentedMovies([...rentedMovies, movie]);
  };

  const returnMovie = (movie) => {
    const updatedRentedMovies = rentedMovies.filter((rentedMovie) => rentedMovie.id !== movie.id);
    setRentedMovies(updatedRentedMovies);
  };

  return (
    <div>
      <h1>{category}</h1>
      <ul>
        {entities.map((entity) => (
          <li key={entity.id}>
            <img src={entity.img} alt={entity.title} />
            <p>{entity.title}</p>
            <button onClick={() => rentMovie(entity)}>Rent</button>
            {rentedMovies.find((rentedMovie) => rentedMovie.id === entity.id) ? (
              <button onClick={() => returnMovie(entity)}>Return</button>
            ) : null}
            <Link to={`/movies/${entity.id}`}>Details</Link>
          </li>
        ))}
      </ul>

      {rentedMovies.length > 0 && (
        <div>
          <h2>Rented Movies</h2>
          <ul>
            {rentedMovies.map((rentedMovie) => (
              <li key={rentedMovie.id}>
                {rentedMovie.title} - <button onClick={() => returnMovie(rentedMovie)}>Return</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default EntityList;
