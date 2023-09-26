import React, { useState } from "react";

import { FiSearch } from "react-icons/fi";
import Input from "./Input";
import Location from "../../pages/homPage/Location";

const Search = () => {
  const [searched, setSearched] = useState("");
  return (
    <div className="rounded-2xl grid grid-cols-10 w-full lg:max-w-2xl xl:max-w-3xl h-14 items-center py-2 px-2 overflow-hidden border shadow-sm hover:shadow-lg hover:translate-y-1 bg-white duration-300">
      <FiSearch className="col-span-1 mx-auto text-gray-700 hover:text-blue cursor-pointer duration-200" />
      <Input
        value={searched}
        onchange={(e) => setSearched(e.target.value)}
        large
        home
        placeholder="نام بیماری, تخصص, پزشک, مرکز درمانی و ..."
      />
      <Location />
    </div>
  );
};

export default Search;
