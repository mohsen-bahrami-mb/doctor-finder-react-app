import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

import Button from './../../components/general/Button';
import RadioInput from "../../components/general/RadioInputs ";
import Select from "../../components/general/Select";
import Title from "./Title";
import { getAllLinks } from "./../../constants/data";
import { useSearchParams } from "react-router-dom";
import useTokenState from "../../stores/useTokenState";
import useSearchResult from "../../stores/useSearchResult";

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
  const [params, setParams] = useSearchParams();
  const allFields = getAllLinks();
  const specialist = allFields[1].items;
  const [selectedGender, setSelectedGender] = useState("all");
  const [selectedSpecialist, setSelectedSpecialist] = useState(1);
  const [selectedDoctorType, setSelectedDoctorType] = useState("doctors");
  const [selectedDoctorDegree, setSelectedDoctorDegree] = useState("fellowship");
  const { isToken } = useTokenState();
  const { onSetResult } = useSearchResult();

  const handleGender = (event) => {
    setSelectedGender(event.target.value);
  };

  const handleSpecialist = (event) => {
    const value = Number(event.target.value)
    setSelectedSpecialist(value);
    const searchTxt = allFields[1].items.filter(item => item.id === value);
    params.set("target", searchTxt[0].label);
    setParams(params);
  };

  const handleDoctorType = (event) => {

    setSelectedDoctorType(event.target.value);
  };

  const handleDoctorDegree = (event) => {
    setSelectedDoctorDegree(event.target.value);
  };

  const search = async () => {
    const target = params.get("target");
    const detail = params.get("detail") || 1;
    const limit = params.get("limit") || 20;
    const skip = params.get("skip") || 0;

    try {
      const result = await axios.get(`/search/searchInNames/${target}?detail=${detail}&limit=${limit}&skip=${skip}`,
        {
          headers: {
            ...(isToken && { "x-auth-token": isToken })
          }
        }
      );
      onSetResult(result.data.data)
    } catch (err) {
      toast.error("نتیجه‌ای یافت نشد!");
    }
  }

  return (
    <div>
      <section className="bg-white -z-0 lg:sticky top-32 space-y-5 shadow-md rounded-md p-5">
        {/* gender */}
        {/* <div>
          <Title title="جنسیت" />
          <Select
            options={genders}
            value={selectedGender}
            onChange={handleGender}
          />
        </div> */}
        {/* specialist */}
        {/* <div>
          <Title title="تخصص" />
          <Select
            options={specialist}
            value={selectedSpecialist}
            onChange={handleSpecialist}
          />
        </div> */}
        <div>
          <Title title="تخصص" />
          <RadioInput
            name="specialist"
            options={specialist}
            selectedValue={selectedSpecialist}
            onChange={handleSpecialist}
          />
        </div>
        {/* radio-buttons */}
        {/* <div>
          <Title title="نوع نتایج" />
          <RadioInput
            name="doctor-type"
            options={resultsOptions}
            selectedValue={selectedDoctorType}
            onChange={handleDoctorType}
          />
        </div> */}
        {/* <div>
          <Title title='درجه علمی' />
          <RadioInput
            name="doctor-degree"
            options={degreeOptions}
            selectedValue={selectedDoctorDegree}
            onChange={handleDoctorDegree}
          />
        </div> */}
        <Button filled large full label='جستجو' onclick={search} />
      </section>
    </div>
  );
};

export default Filter;
