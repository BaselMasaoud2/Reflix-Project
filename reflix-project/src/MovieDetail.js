import React from 'react';

const MovieDetail = ({ moviesData }) => {
  // Extract movieID from the URL parameter
  const movieID = window.location.pathname.split('/').pop();
  const movie = moviesData.find(movie => movie.id === parseInt(movieID, 10));

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="movie-detail">
      <img src={movie.img} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>Year: {movie.year}</p>
      <p>Description: {movie.descrShort}</p>
    </div>
  );
}

export default MovieDetail;
