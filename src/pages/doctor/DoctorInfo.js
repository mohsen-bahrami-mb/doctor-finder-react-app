import { BiPencil, BiSolidCommentDots } from "react-icons/bi";
import React, { useState } from "react";

import { BiShareAlt } from "react-icons/bi";
import { BsBookmark } from "react-icons/bs";
import CommentForm from "./CommentForm";
import Comments from "./Comments";
import { FaStethoscope } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { GoCommentDiscussion } from "react-icons/go";
import Heading from "./Heading";
import { IoNewspaperOutline } from "react-icons/io5";
import { LuMedal } from "react-icons/lu";
import { MdOutlineWork } from "react-icons/md";
import SidebarSection from "./SidebarSection";
import doctor from "../../assets/images/dashboard/056329162890c39a0ec0.jpg";

const DoctorInfo = () => {
  const [tab, setTab] = useState('info');
  return (
    <div className="md:col-span-2 space-y-5">
      <SidebarSection>
        <div className="flex items-center border-b">
          <Heading
            doctor
            icon={BsBookmark}
            title="ذخیره"
            classname="text-slate-800 text-lg"
          />
          <Heading
            doctor
            icon={BiShareAlt}
            title="اشتراک گذاری"
            classname="text-slate-800 text-lg"
          />
          <Heading
            doctor
            icon={BiPencil}
            title="گزارش"
            classname="text-slate-800 text-lg"
          />
        </div>
        <div className="rounded-lg bg-slate-50 p-7 m-5">
          <div className="flex items-center gap-5">
            <img className="w-24 h-24 rounded-full" alt="doctor" src={doctor} />
            <div className="space-y-1">
              <h2 className="font-bold text-lg">دکتر بهمن علیزاده</h2>
              <div className="flex items-center gap-2">
                <FaStethoscope className="text-blue" />
                <h3 className="font-semibold text-sm">37 سال تجربه</h3>
              </div>
              <h3 className="font-medium text-sm text-slate-500">
                شماره نظام پزشکی: 26788.
              </h3>
            </div>
          </div>
        </div>
        <div className="p-5 space-y-3">
          <h3 className="border py-1 px-3 rounded-full w-fit mx-auto font-medium text-sm text-slate-500">
            جراح و متخصص چشم‌ و پلک بهترین دکتر لیزیک لازک اب مروارید انحراف چشم
            پتوز
          </h3>
          <h3 className="w-fit mx-auto font-medium text-slate-700">320 نظر</h3>
        </div>
      </SidebarSection>
      <SidebarSection>
        <div className="flex bg-slate-300 rounded-md font-medium text-slate-500 p-5 items-center gap-7">
          <h3 onClick={()=> setTab('info')} className={`hover:text-blue ${tab === 'info' && 'text-blue'} cursor-pointer duration-200`}>اطلاعات پزشک</h3>
          <h3 onClick={()=> setTab('review')} className={`hover:text-blue ${tab === 'review' && 'text-blue'} cursor-pointer duration-200`}>نظرات</h3>
        </div>
      </SidebarSection>
      <div className={` space-y-5 ${tab === 'info' ? 'block' : 'hidden'}`}>
        <SidebarSection>
          <Heading
            icon={FaUserDoctor}
            title="درباره پزشک"
            classname="text-slate-800 text-lg"
          />
          <div className="p-5">
            <div className="flex items-center gap-2">
              <IoNewspaperOutline className="text-slate-800" />
              <h3 className="font-semibold">بیوگرافی</h3>
            </div>
            <ul className="text-slate-600 mt-3 text-sm space-y-1">
              <li>
                رتبه 1 کنکور پزشکی. 37سال سابقه درخشان با بیش از 20000 جراحی
                موفق -عضو اکادمی چشم پزشکی آمریکا
              </li>
              <li>جراحی پلک به روش نوین بدون برش از بیرون چشم</li>
              <li>
                جراحی پتوز چشم _انحراف چشم--اب مروارید - - لیزیک لازک فمتولیزیک
                و…{" "}
              </li>
            </ul>
          </div>
        </SidebarSection>

        <SidebarSection>
          <Heading
            icon={MdOutlineWork}
            title="فعالیت ها دکتر بهمن علیزاده"
            classname="text-slate-800 text-lg"
          />
          <div className="p-5 space-y-4">
            <div className="flex items-center gap-2 bg-slate-100 p-2 rounded-md">
              <GoCommentDiscussion className="text-slate-800 text-lg" />
              <div className="flex items-center gap-1">
                <h3 className="font-bold">240 </h3>
                <h3 className="font-medium text-slate-600"> مشاوره فعال</h3>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-slate-100 p-2 rounded-md">
              <LuMedal className="text-slate-800 text-lg" />
              <h3 className="font-medium text-slate-600">
                پذیرش24 بیش از 3 سال و 4 ماه افتخار میزبانی از صفحه اختصاصی دکتر
                بهمن علیزاده را داشته است.
              </h3>
            </div>
          </div>
        </SidebarSection>
      </div>
      <div className={`${tab === 'review' ? 'block' : 'hidden'}`}>
        <SidebarSection>
          <Heading
            icon={BiSolidCommentDots}
            title="نظرات در مورد دکتر بهمن علیزاده"
            classname="text-slate-800 text-lg"
          />
          <CommentForm />
          <Comments />
        </SidebarSection>
      </div>
    </div>
  );
};

export default DoctorInfo;
