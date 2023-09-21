import React from "react";

const IconWithText = ({ icon: Icon, text, color, large }) => {
  return (
    <div className="flex items-center gap-3">
      <Icon
        className={`${
          large ? "text-2xl text-gray-400" : "text-lg text-gray-500"
        } `}
      />
      {color ? (
        <span
          className={` 
      ${color ? `${color}` : "text-gray-500"}
        ${large ? "text-base" : "text-[15px]"}
        `}
        >
          {text}
        </span>
      ) : (
        <span
          className={` 
        ${
          large
            ? "text-base text-slate-400 font-medium"
            : "text-[15px] text-gray-500"
        } 
        `}
        >
          {text}
        </span>
      )}
    </div>
  );
};

export default IconWithText;
