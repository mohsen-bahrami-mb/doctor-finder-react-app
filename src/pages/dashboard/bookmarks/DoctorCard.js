import { AiFillCheckCircle } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import Button from "../../../components/general/Button";
import IconWithText from "../../../components/general/IconWithText";
import { MdLocationOn } from "react-icons/md";
import React from "react";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import Star from "../../../components/general/Star";
import doctor from "../../../assets/images/dashboard/e8a9570dc3b6da522754.jpg";

const DoctorCard = () => {
  return (
    <div className="p-5 border rounded-md hover:shadow-md duration-200">
      <div className="overflow-hidden rounded-md">
        <img alt="doctor" src={doctor} className="w-full h-full rounded-md hover:scale-105 duration-200 cursor-pointer"/>
      </div>
      <div>
        <div className="flex items-center gap-2 mt-3">
          <h2 className="text-slate-800 text-lg">اکبر نادی</h2>
          <AiFillCheckCircle className="text-green-700 text-lg" />
        </div>
        <h3 className="text-sm text-slate-500">متخصص بیماریهای قلب و عروق</h3>
        <div className="flex items-center gap-3 mt-6">
          <div className="flex items-center">
            {[1, 2, 3, 4].map((star) => (
              <Star key={star} />
            ))}
          </div>
          <span className="text-xs text-gray-500">(42)</span>
        </div>
        <div className="mt-4 flex flex-col gap-3 text-xs tracking-tighter">
          <IconWithText text="تهران, پاسداران" icon={MdLocationOn} />
          <IconWithText text="در دسترس در جمعه 22 مهر" icon={BiTimeFive} />
          <IconWithText text="100هزار - 300هزار" icon={RiMoneyDollarCircleLine} />
        </div>
      </div>
      <div className="grid grid-cols-2 mt-6 items-center gap-5">
        <Button label='رزرو نوبت' filled onclick={()=> {}} />
        <Button label='پروفایل' onclick={()=> {}} />
      </div>
    </div>
  );
};

export default DoctorCard;
