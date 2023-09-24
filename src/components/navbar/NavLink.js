import { BiChevronDown } from "react-icons/bi";
import React from "react";

const NavLink = ({ name, items, id }) => {
  return (
    <div className="group">
      <div className="flex group items-center gap-2 text-gray-500 font-semibold hover:text-[#0E82FD] duration-200 cursor-pointer">
        <h2 className="text-sm xl:text-base">{name}</h2>
        {id !== 5 && (
          <BiChevronDown className="group-hover:rotate-180 duration-300" />
        )}
      </div>
      <div
        className={`absolute hidden p-4  top-[51px] ${id !== 5 && 'group-hover:grid' } ${
          id === 4 ? "grid-cols-1 left-[450px]" : "grid-cols-4 left-60"
        } bg-white rounded-md shadow-lg drop-shadow-lg gap-2`}
      >
        {items?.map((item, i) => (
          <h3
            className={`font-semibold text-xs text-gray-700 hover:text-[#0E82FD] cursor-pointer duration-200 hover:-translate-x-1 ${
              i !== items.length - 1 && "border-b border-gray-200 pb-2"
            } `}
            key={item.id}
          >
            {item.label}
          </h3>
        ))}
      </div>
    </div>
  );
};

export default NavLink;
