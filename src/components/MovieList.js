import React from "react";
import MovieItem from "./MovieItem";

const MovieList = ({ moviesListData }) => {
  return (
    <div>
      {moviesListData.map((movieData) => (
        <MovieItem movieData={movieData} />
      ))}
    </div>
  );
};

export default MovieList;
