import React, { useState } from "react";

import Button from './../../components/general/Button';
import RadioInput from "../../components/general/RadioInputs ";
import Select from "../../components/general/Select";
import Title from "./Title";
import { getAllLinks } from "./../../constants/data";

const genders = [
  { value: "male", label: "مرد" },
  { value: "female", label: "زن" },
  { value: "all", label: "همه" },
];

  const resultsOptions = [
    { value: "hospital", label: "پزشکان بیمارستانی" },
    { value: "office", label: "پزشکان مطبی" },
    { value: "doctors", label: "پزشکان" },
  ];

  const degreeOptions = [
    { value: "fellowship", label: "فلوشیپ" },
    { value: "specialty", label: 'فوق تخصص' },
    { value: "expert", label: 'متخصص' },
    { value: "P.H.D", label: 'دکتری' },
  ];
const Filter = () => {
  const allFields = getAllLinks();
  const specialist = allFields[1].items;
  const [selectedGender, setSelectedGender] = useState("all");
  const [selectedSpecialist, setSelectedSpecialist] = useState("دکتر آنلاین ازدواج");
  const [selectedDoctorType, setSelectedDoctorType] = useState("doctors");
  const [selectedDoctorDegree, setSelectedDoctorDegree] = useState("fellowship");
console.log(selectedSpecialist);
  const handleGender = (event) => {
    setSelectedGender(event.target.value);
  };
  
  const handleSpecialist = (event) => {
    setSelectedSpecialist(event.target.value);
  };
  
  const handleDoctorType = (event) => {
    setSelectedDoctorType(event.target.value);
  };
  
  const handleDoctorDegree = (event) => {
    setSelectedDoctorDegree(event.target.value);
  };
  return (
    <div>
      <section className="bg-white -z-0 lg:sticky top-32 space-y-5 shadow-md rounded-md p-5">
        {/* gender */}
        <div>
          <Title title="جنسیت" />
          <Select
            options={genders}
            value={selectedGender}
            onChange={handleGender}
          />
        </div>
        {/* specialist */}
        <div>
          <Title title="تخصص" />
          <Select
            options={specialist}
            value={selectedSpecialist}
            onChange={handleSpecialist}
          />
        </div>
        {/* radio-buttons */}
        <div>
          <Title title="نوع نتایج" />
          <RadioInput
            name="doctor-type"
            options={resultsOptions}
            selectedValue={selectedDoctorType}
            onChange={handleDoctorType}
          />
        </div>
        <div>
          <Title title='درجه علمی' />
          <RadioInput
            name="doctor-degree"
            options={degreeOptions}
            selectedValue={selectedDoctorDegree}
            onChange={handleDoctorDegree}
          />
        </div>
        <Button filled large full label='جستجو'/>
      </section>
    </div>
  );
};

export default Filter;
