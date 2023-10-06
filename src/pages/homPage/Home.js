import React from "react";
import Search from "../../components/general/Search";
import Vector from "./Vector";
import useTokenState from "../../stores/useTokenState";

const Home = () => {
  const { isToken } = useTokenState();
console.log(isToken);
  return (
    <div className="flex flex-col section gap-10 items-center justify-center h-[91vh]">
      <Vector />
      <Search />
    </div>
  );
};

export default Home;
