import { BiSolidTimeFive } from "react-icons/bi";
import Button from "../../components/general/Button";
import { FaTelegram } from "react-icons/fa";
import { GiWalk } from "react-icons/gi";
import Heading from "./Heading";
import { IoLocationSharp } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import React from "react";
import { RiRadioButtonLine } from "react-icons/ri";
import SidebarSection from "./SidebarSection";
import { TiNews } from "react-icons/ti";

const VisitSidebar = () => {
  return (
    <div className="md:col-span-1 md:sticky top-24 h-fit space-y-5">
      <SidebarSection>
        <Heading
          title="ویزیت انلاین"
          info="100,000 تومان"
          classname="text-green-600 animate-pulse"
          icon={RiRadioButtonLine}
        />
        <div className="p-5">
          <div className="flex items-center mb-7 justify-between">
            <h3 className="text-slate-800 text-sm">
              ویزیت آنلاین در پیام رسان:
            </h3>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <IoLogoWhatsapp className="text-green-700 text-lg" />
                <h3 className="text-sm mb-1 text-slate-700">واتساپ</h3>
              </div>
              <div className="flex items-center gap-2">
                <FaTelegram className="text-blue text-lg" />
                <h3 className="text-sm mb-1 text-slate-700">تلگرام</h3>
              </div>
            </div>
          </div>
          <Button filled label="رزرو گفتگو" full onclick={() => {}} />
        </div>
      </SidebarSection>

      <SidebarSection>
        <Heading
          title="نوبت اینترنتی و مراجعه حضوری"
          classname="text-slate-800 text-lg"
          icon={GiWalk}
        />
        <div className="p-5">
          <div className="mb-7 text-sm space-y-1 text-slate-700">
            <h3>امکان دریافت زودترین نوبت</h3>
            <div className="flex items-center gap-1">
              <BiSolidTimeFive />
              <div className="flex items-center gap-2">
                <h2>میانگین زمان انتظار تا ویزیت:</h2>
                <h2 className="text-slate-900 font-medium">کمتر از نیم ساعت</h2>
              </div>
            </div>
          </div>
          <Button filled label="دریافت نوبت" full onclick={() => {}} />
        </div>
      </SidebarSection>

      <SidebarSection>
        <Heading
          title="آدرس و تلفن تماس"
          classname="text-slate-800 text-lg"
          icon={TiNews}
        />
        <div className="p-5">
          <div className="mb-7 text-sm space-y-1 text-slate-700">
            <h3>مطب دکتر پردیس کریم نژاد</h3>
            <div className="flex items-center gap-1">
              <IoLocationSharp />
              <div className="flex items-center gap-2">
                <h2>تهران</h2>
                <h2 className="text-slate-900 font-medium">مرکز پذیرش ۲۴</h2>
              </div>
            </div>
          </div>
          <Button label="0914-968-9984" full onclick={() => {}} />
        </div>
      </SidebarSection>
    </div>
  );
};

export default VisitSidebar;
