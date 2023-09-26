import DoctorCard from "./DoctorCard";
import React from "react";

const DoctorsList = () => {
  return (
    <div className="lg:col-span-3">
      <section className="space-y-5">
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
      </section>
    </div>
  );
};

export default DoctorsList;
