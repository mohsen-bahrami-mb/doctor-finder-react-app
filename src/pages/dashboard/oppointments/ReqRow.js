import React from "react";

const ReqRow = () => {
  return (
    <tr className="hover:bg-black/10 odd:bg-slate-50 py-5 duration-200">
      <td className="py-4 px-4 border-b">
        <h2 className="text-slate-800">1</h2>
      </td>
      <td className="py-2 px-4 border-b">
          <h2 className="text-slate-800">OD1236547890</h2>
      </td>
      <td className="py-2 px-4 border-b">
          <h2 className="text-slate-800">اکبر عبدی</h2>
      </td>
      <td className="py-2 px-4 border-b">
        <h2 className="text-slate-800">4</h2>
      </td>
      <td className="py-2 px-4 border-b">
        <h2 className="text-slate-800">80 هزار تومان</h2>
      </td>
      <td className="py-2 px-4 border-b">
        <h2 className="text-slate-800">بانک عضو شتاب</h2>
      </td>
      <td className="py-2 px-4 border-b">
        <h3 className="text-green-700 py-1 px-2 bg-green-200 text-center text-xs rounded-md w-14 font-bold">
            ثبت
        </h3>
      </td>
      <td className="py-2 px-4 border-b">
        <div>
          <h2 className="text-slate-800">1402/02/30</h2>
          <h3 className="text-blue">14:20</h3>
        </div>
      </td>
    </tr>
  );
};

export default ReqRow;
