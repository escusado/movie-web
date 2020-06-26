import React from "react";
import SearchInputComponent from "./SearchInputComponent";

const Header = () => {
  return (
    <div>
      <span role="img" aria-labelledby="movie">
        🎥 LOGO
      </span>

      <SearchInputComponent />
    </div>
  );
};

export default Header;
