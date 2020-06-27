import React, { useEffect, useState } from "react";
import Config from "../config";
import { useParams } from "react-router-dom";

import MovieList from "../components/MovieList";

const SearchView = () => {
  const [moviesListData, setMoviesListData] = useState([]);
  const { searchTerm } = useParams();

  const fectchmoviesListData = async () => {
    return await fetch(Config.movieApiUrl + `'${searchTerm}'`);
  };

  useEffect(() => {
    fectchmoviesListData().then(async (data) => {
      setMoviesListData((await data.json()).Search);
    });
  }, [searchTerm]);

  return (
    <div>
      <div>Search View: 🎥🎥{searchTerm}</div>
      <MovieList moviesListData={moviesListData} />
    </div>
  );
};

export default SearchView;
