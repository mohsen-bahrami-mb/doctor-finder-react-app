import React from "react";

const Heading = ({ title, doctor, info, classname, icon: Icon }) => {
  return (
    <div className={`p-5 ${!doctor && 'border-b'}  flex items-center justify-between`}>
      <div className="flex items-center gap-2">
        <Icon className={classname} />
        <h3 className="text-slate-700 mb-1 font-semibold">{title}</h3>
      </div>
      <div className="text-slate-700 font-semibold">{info}</div>
    </div>
  );
};

export default Heading;
