import React from "react";
import ReqRow from "./ReqRow";

const Req = () => {
  return (
    <div className="overflow-auto h-[305px]">
      <table className="w-[970px] text-right bg-white border-collapse">
        <thead className="border-b-2 border-slate-800">
          <tr className="text-slate-800">
            <th className="py-2 px-4 border-b">#</th>
            <th className="py-2 px-4 border-b">شناسه درخواست</th>
            <th className="py-2 px-4 border-b">نام دکتر</th>
            <th className="py-2 px-4 border-b">تعداد</th>
            <th className="py-2 px-4 border-b">مبلغ ویزیت</th>
            <th className="py-2 px-4 border-b">درگاه پرداخت</th>
            <th className="py-2 px-4 border-b">وضعیت</th>
            <th className="py-2 px-4 border-b">تاریخ درخواست</th>
          </tr>
        </thead>
        <tbody>
          <ReqRow />
          <ReqRow />
          <ReqRow />
          <ReqRow />
        </tbody>
      </table>
    </div>
  );
};

export default Req;
