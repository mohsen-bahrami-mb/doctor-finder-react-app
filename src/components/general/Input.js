import React from "react";

const Input = ({
  icon: Icon,
  onclick,
  full,
  placeholder,
  home,
  large,
  value,
  onchange,
}) => {
  if (Icon) {
    return (
      <div
        className={`relative rounded-md h-12 shadow-md ${
          full ? "w-full" : "w-fit"
        } `}
      >
        <input
          className={`outline-none focus:ring-2 focus:ring-blue-600 pr-3 h-full ${
            full ? "w-full" : "w-fit"
          } border rounded-md text-gray-500 font-medium`}
          placeholder={placeholder}
          value={value}
          onChange={onchange}
        />
        <Icon
          onClick={onclick}
          className="absolute cursor-pointer text-lg left-3 top-4 text-gray-400 hover:text-blue duration-200"
        />
      </div>
    );
  }

  if (home) {
    return (
      <input
        className="outline-none col-span-6 lg:col-span-8 h-full text-gray-500 font-medium"
        placeholder={placeholder}
        value={value}
        onChange={onchange}
      />
    );
  }

  return (
    <input
      className={`outline-none ${
        large && "w-full"
      } text-gray-500 focus:ring-2 focus:ring-blue-600 focus:-translate-y-1 duration-300 pr-3 h-12 border rounded-md shadow-md`}
      placeholder={placeholder}
      value={value}
      onChange={onchange}
    />
  );
};

export default Input;
