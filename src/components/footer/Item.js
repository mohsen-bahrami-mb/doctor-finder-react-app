import React from "react";

const Item = ({ label, items }) => {
  return (
    <div>
      <h2 className="font-bold text-xl xl:text-2xl mb-4 lg:mb-6">{label}</h2>
      <ul className="space-y-3">
        {items.map((item) => (
          <li className="flex items-center cursor-pointer w-fit hover:-translate-x-1 duration-200 gap-2">
            <div>{item.icon}</div>
            <h3 className="font-medium hover:text-gray-200 duration-200">{item.name}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Item;
