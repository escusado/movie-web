import React from "react";
import { Link } from "react-router-dom";

const HomeView = () => {
  return (
    <div>
      <div>Home View</div>
      <Link to="/search/kung-fu">Kung-fu movies</Link>
      <Link to="/search/disney">Disney movies</Link>
    </div>
  );
};

export default HomeView;
