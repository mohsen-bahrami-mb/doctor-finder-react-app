import Button from "../../../components/general/Button";
import React from "react";
import User from "./User";
import useNewUser from "../../../stores/useNewUser";

const SubUsers = () => {
  const { onUserOpen } = useNewUser();
  const UserHandler = () => {
    onUserOpen();
  };
  return (
    <div className="bg-white px-5 py-16 rounded-md shadow-md">
      <h2 className="text-slate-800 font-bold text-xl mb-7">
        کاربران زیرمجموعه من
      </h2>
      <div className="space-y-7 mb-10">
        <User />
        <User />
        <User />
      </div>
      <Button filled onclick={UserHandler} label="افزودن کاربر جدید" />
    </div>
  );
};

export default SubUsers;
