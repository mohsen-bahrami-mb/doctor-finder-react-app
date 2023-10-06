import OppRow from "./OppRow";
import React from "react";

const Opp = () => {
  return (
    <div className="overflow-auto h-[305px]">
      <table className="w-[970px] text-right bg-white border-collapse">
        <thead className="border-b-2 border-slate-800 bg-blue-100">
          <tr className="text-slate-800">
            <th className="py-2 px-4 border-b">دکتر</th>
            <th className="py-2 px-4 border-b">تاریخ ملاقات</th>
            <th className="py-2 px-4 border-b">تاریخ رزرو</th>
            <th className="py-2 px-4 border-b">مبلغ ویزیت</th>
            <th className="py-2 px-4 border-b">وضعیت</th>
            <th className="py-2 px-4 border-b"></th>
          </tr>
        </thead>
        <tbody>
          <OppRow />
          <OppRow />
          <OppRow />
        </tbody>
      </table>
    </div>
  );
};

export default Opp;
