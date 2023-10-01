import { Link } from "react-router-dom";
import React from "react";
import { getPatientTabs } from "../../constants/data";

const PatientTabs = () => {
  const tabs = getPatientTabs();
  return (
    <div className="fixed flex lg:hidden z-0 items-center justify-between bottom-0 right-0 border-t px-7 py-3 bg-white w-full">
      {tabs.map(({ id, label, icon, route }) => (
        <Link key={id} to={route}>
          <div
            key={id}
            className="flex cursor-pointer group text-gray-700 flex-col gap-2 items-center justify-center"
          >
            <div className="text-lg group-hover:text-blue duration-200 ">
              {icon}
            </div>
            <h2 className="text-sm group-hover:text-blue duration-200  font-medium">
              {label}
            </h2>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PatientTabs;
