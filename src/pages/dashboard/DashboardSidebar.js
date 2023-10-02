import { AiFillPhone } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
import IconWithText from "../../components/general/IconWithText";
import LinkItem from "./LinkItem";
import React from "react";
import { getAllDashboardLinks } from "../../constants/data";
import profile from "../../assets/images/dashboard/056329162890c39a0ec0.jpg";

const DashboardSidebar = () => {
    const links = getAllDashboardLinks();
  return (
    <div className="bg-white px-5 py-16 md:col-span-1">
      <div className="border rounded-md flex flex-col items-center gap-5 p-5">
        <img
          className="rounded-full shadow-lg w-32 h-32"
          alt="profile"
          src={profile}
        />
        <div className="space-y-2 flex flex-col items-center">
          <h2 className="text-lg font-semibold text-slate-800">یوسف خدری</h2>
          <IconWithText text="ارومیه" icon={HiLocationMarker} />
          <IconWithText text="0922-630-8183" icon={AiFillPhone} />
        </div>
      </div>
      <div className="flex flex-col mt-2">
        {links.map(link => 
            <LinkItem key={link.id} {...link} />
        )}
      </div>
    </div>
  );
};

export default DashboardSidebar;
