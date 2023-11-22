import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { FiSearch } from "react-icons/fi";
import Input from "./Input";
import Location from "../../pages/homPage/Location";
import axios from "axios";
import toast from "react-hot-toast";
import useSearchResult from "../../stores/useSearchResult";
import useTokenState from "../../stores/useTokenState"

const Search = () => {
  const navigate = useNavigate();
  const [params, setParams] = useSearchParams();
  const [searched, setSearched] = useState("");
  const { isToken } = useTokenState();
  const { onSetResult } = useSearchResult();

  const getSearchData = async (e) => {
    e.preventDefault();

    if (window.location.pathname !== "/search") {
      navigate(`/search?target=${searched}&detail=1&limit=20&skip=0`)
    }
    else {
      const target = searched || params.get("target");
      const detail = params.get("detail") || 1;
      const limit = params.get("limit") || 20;
      const skip = params.get("skip") || 0;

      params.set("target", target);
      params.set("detail", detail);
      params.set("limit", limit);
      params.set("skip", skip);
      setParams(params);

      try {
        const result = await axios.get(`/search/searchInNames/${target}?detail=${detail}&limit=${limit}&skip=${skip}`,
          {
            headers: {
              ...(isToken && { "x-auth-token": isToken })
            }
          }
        );
        onSetResult(result.data.data);
      } catch (err) {
        toast.error("نتیجه‌ای یافت نشد!");
      }
    }
  }

  return (
    <form onSubmit={getSearchData}
      className="rounded-2xl grid grid-cols-10 w-full lg:max-w-2xl xl:max-w-3xl h-14 items-center py-2 px-2 overflow-hidden border shadow-sm hover:shadow-lg hover:translate-y-1 bg-white duration-300">
      <FiSearch
        className="col-span-1 mx-auto text-gray-700 hover:text-blue cursor-pointer duration-200"
        onClick={getSearchData}
      />
      <Input
        value={searched}
        onchange={(e) => setSearched(e.target.value)}
        large
        home
        placeholder="نام بیماری, تخصص, پزشک, مرکز درمانی و ..."
      />
      <Location />
    </form>
  );
};

export default Search;
