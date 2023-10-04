import DashboardSidebar from "./DashboardSidebar";
import { Outlet } from "react-router-dom";
import React from "react";

const DashBoardPage = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-32 bg-slate-200">
        <h2 className="text-3xl font-semibold text-slate-900">داشبورد</h2>
        <div className="flex gap-1 font-medium text-sm text-gray-700 mt-3">
          <h3>خانه /</h3>
          <h3>داشبورد</h3>
        </div>
      </div>
      <div className="grid gap-2 grid-cols-1 section md:grid-cols-3 lg:grid-cols-4 h-fit">
        <div className="md:sticky md:top-28 md:h-[70vh]">
          <DashboardSidebar />
        </div>
        <div className="md:col-span-2 lg:col-span-3">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default DashBoardPage;
