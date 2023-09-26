import React from "react";

const RadioInput = ({ key, name, value, label, checked, onChange }) => {
  return (
    <label key={key} className="text-sm text-gray-600">
      <input
        className="ml-2"
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      {label}
    </label>
  );
};

export default RadioInput;
