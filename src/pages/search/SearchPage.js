import FilterAndList from "./FilterAndList";
import React from "react";
import Search from "../../components/general/Search";

const SearchPage = () => {
  return (
    <div className="section flex flex-col items-center">
      <Search />
      <FilterAndList />
    </div>
  );
};

export default SearchPage;