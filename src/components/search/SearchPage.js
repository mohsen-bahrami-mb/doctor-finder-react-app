import FilterAndList from "./FilterAndList";
import React from "react";
import Search from "../general/Search";

const SearchPage = () => {
  return (
    <div className="h-screen section flex flex-col items-center">
      <Search />
      <FilterAndList />
    </div>
  );
};

export default SearchPage;