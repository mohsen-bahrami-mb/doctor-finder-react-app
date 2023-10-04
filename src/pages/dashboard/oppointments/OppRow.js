import { AiFillPrinter, AiOutlineEye } from "react-icons/ai";

import React from "react";
import doctor from "../../../assets/images/dashboard/150001a4fc1433625841.jpg";

const OppRow = () => {
  return (
    <tr className="hover:bg-black/10 odd:bg-slate-50 py-5 duration-200">
      <td className="py-4 px-4 border-b">
        <div className="flex items-center gap-2 group cursor-pointer">
          <img alt="doctor" src={doctor} className="w-12 h-12 rounded-full" />
          <div>
            <h2 className="text-slate-800 group-hover:text-blue duration-200">علی نادری</h2>
            <h3 className="text-slate-500 text-xs">دندان پزشک</h3>
          </div>
        </div>
      </td>
      <td className="py-2 px-4 border-b">
        <div>
          <h2 className="text-slate-800">1402/02/30</h2>
          <h3 className="text-blue">14:20</h3>
        </div>
      </td>
      <td className="py-2 px-4 border-b">
        <h2 className="text-slate-800">1402/02/30</h2>
      </td>
      <td className="py-2 px-4 border-b">
        <h2 className="text-slate-800">80 هزار تومان</h2>
      </td>
      <td className="py-2 px-4 border-b">
        <h3 className="text-green-700 bg-green-200 text-center text-sm rounded-md w-14 font-bold">تایید</h3>
      </td>
      <td className="py-2 px-4 border-b">
        <div className="flex items-center gap-2">
            <div className="flex items-center py-1 px-2 rounded-md bg-blue-100 gap-1 text-blue">
                <AiFillPrinter />
                <h3 className="text-xs pb-1">پرینت</h3>
            </div>
            <div className="flex items-center py-1 px-2 rounded-md bg-green-100 gap-1 text-green-600">
                <AiOutlineEye />
                <h3 className="text-xs pb-1">مشاهده</h3>
            </div>
        </div>
      </td>
    </tr>
  );
};

export default OppRow;
