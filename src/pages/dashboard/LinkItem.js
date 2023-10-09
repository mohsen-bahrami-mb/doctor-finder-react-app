import { useLocation, useNavigate } from "react-router-dom";

import React from "react";

const LinkItem = ({ slug, route, label, Icon }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(route)}
      style={{color: `${pathname === route ? '#0E82FD' : ''}`}}
      className={`flex items-center hover:text-blue duration-200 border cursor-pointer p-3 gap-3 text-gray-500 font-medium`}
    >
      <span className="text-xl">{Icon}</span>
      <span>{label}</span>
    </div>
  );
};

export default LinkItem;
