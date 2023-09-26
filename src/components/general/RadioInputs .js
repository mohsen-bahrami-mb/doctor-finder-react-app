import RadioInput from "./RadioInput";
import React from "react";

const RadioInputs = ({ name, options, selectedValue, onChange }) => {
  return (
    <div className="flex flex-col gap-2 mt-3">
      {options.map((option) => (
        <RadioInput
          key={option.value}
          label={option.label}
          name={name}
          value={option.value}
          checked={option.value === selectedValue}
          onChange={onChange}
        />
      ))}
    </div>
  );
};

export default RadioInputs;
