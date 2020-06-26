import React from "react";
import { useParams } from "react-router-dom";

const SearchView = () => {
  const params = useParams();
  return <div>Search View: 🎥🎥{params.searchTerm}</div>;
};

export default SearchView;
