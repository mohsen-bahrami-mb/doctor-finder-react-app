import React from "react";

const Select = ({ options, value, onChange }) => {
  return (
    <select value={value} onChange={onChange} className="outline-none w-full rounded-md border h-12 text-end text-gray-500 font-medium">
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
