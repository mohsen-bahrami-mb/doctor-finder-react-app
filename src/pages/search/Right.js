import { AiOutlineCheckCircle } from "react-icons/ai";
import DoctorTag from "./../../components/doctors/DoctorTag";
import { HiOutlineLocationMarker } from "react-icons/hi";
import IconWithText from "../../components/general/IconWithText";
import React from "react";
import Star from "../../components/general/Star";
import doctor from "../../assets/images/book-doctor-11-255x250.jpg";

const Right = () => {
  return (
    <div className="lg:col-span-2 items-center grid grid-cols-1 md:grid-cols-3 mx-auto gap-5">
      <img
        className="w-32 md:w-full rounded-lg mx-auto lg:col-span-1 "
        src={doctor}
        alt="doctor"
      />
      <div className="text-center lg:text-right space-y-5 md:col-span-2">
        <div className="flex gap-1 justify-center items-center lg:justify-start">
          <h2 className="text-gray-500 hover:text-blue duration-200 cursor-pointer font-semibold">
            نرگس اصغری
          </h2>
          <AiOutlineCheckCircle className="text-green-600 mt-1" />
        </div>
        <h2 className="text-sm font-medium text-blue">
          متخصص بیماریهای قلب و عروق
        </h2>
        <div className="flex justify-center lg:justify-start">
          {[1, 2, 3, 4, 5].map((item) => (
            <Star key={item} />
          ))}
        </div>
        <div className="md:mx-auto lg:mr-0 space-y-5 w-fit">
          <IconWithText
            text="تهران,میدان هروی،درمانگاه حکیمان"
            icon={HiOutlineLocationMarker}
          />
          <div className="flex items-center gap-3">
            <DoctorTag label="کمترین معطلی" />
            <DoctorTag label="پزشک خوش برخورد" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Right;
