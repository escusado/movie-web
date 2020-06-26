import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const SearchInputComponent = () => {
  const [searchTerm, setSearchTerm] = useState();
  const history = useHistory();

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleOnKeyDown = (e) => {
    console.log(">>>>>history", history);
    if (e.key === "Enter") {
      history.push("search/" + searchTerm);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        onKeyDown={handleOnKeyDown}
      />
    </div>
  );
};

export default SearchInputComponent;
