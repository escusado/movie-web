import React from "react";

const MovieItem = ({ movieData }) => {
  return (
    <div>
      <div className="title">{movieData.Title}</div>
    </div>
  );
};

export default MovieItem;
