import React from "react";

const SidebarSection = ({ children }) => {
  return (
    <div className="rounded-md shadow-md bg-white">
      {children}
    </div>
  );
};

export default SidebarSection;
