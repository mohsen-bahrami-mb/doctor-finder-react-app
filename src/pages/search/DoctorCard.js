import Left from "./Left";
import React from "react";
import Right from "./Right";

const DoctorCard = () => {
  return (
    <div className="p-5 grid grid-cols-1 lg:grid-cols-3 items-center gap-10 shadow-md rounded-md bg-white">
      <Right />
      <Left />
    </div>
  );
};

export default DoctorCard;
