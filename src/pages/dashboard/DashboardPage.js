import { Outlet, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";

import DashboardSidebar from "./DashboardSidebar";
import axios from "axios";
import bg from "../../assets/images/dashboard/bg.jpg";
import toast from "react-hot-toast";
import useTokenState from "../../stores/useTokenState";

// import useRegisterModal from "../../stores/useRegisterModal";

const DashBoardPage = () => {
  const navigate = useNavigate();
  // const { onRegisterOpen } = useRegisterModal();
  const { isToken, onSetToken, onSetUser } = useTokenState();
  if (!isToken) {
    // navigate("/");
    // onRegisterOpen();
  }

  useEffect(() => {
    axios("/user/profile", {
      headers: {
        // "x-auth-token": isToken,
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        const token = res.headers["x-auth-token"] || null;
        onSetToken(token);
        const user = res.data.data || null;
        onSetUser(user);
        axios.defaults.headers.common["x-auth-token"] = token;
        console.log(res);
      })
      .catch((err) => {
        toast.error(err);
      });
  }, [isToken, onSetToken, onSetUser]);

  return (
    <>
      <div
        style={{ backgroundImage: `url(${bg})` }}
        className="flex bg-no-repeat bg-cover flex-col items-center justify-center h-32 bg-slate-200"
      >
        <h2 className="text-3xl font-semibold text-slate-900">داشبورد</h2>
        <div className="flex gap-1 font-medium text-sm text-gray-700 mt-3">
          <h3 className="cursor-pointer" onClick={() => navigate("/")}>
            خانه /
          </h3>
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
