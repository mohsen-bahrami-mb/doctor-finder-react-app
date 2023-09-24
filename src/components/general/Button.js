import React from "react";

const Button = ({ label, filled, onclick, large }) => {
  return (
    <button
      onClick={onclick}
      className={`${
        filled
          ? "bg-[#0E82FD] border-2 border-[#0E82FD] text-white hover:bg-white hover:text-[#0E82FD] hover:border-2 hover:border-[#0E82FD]"
          : "bg-white hover:bg-[#0E82FD] hover:text-white border-2 border-[#0E82FD] text-[#0E82FD]"
      } rounded-md font-bold duration-200 ${
        large ? "text-xl pt-2 pb-3 px-7" : "text-sm pt-1 pb-2 px-5"
      }`}
    >
      {label}
    </button>
  );
};

export default Button;
