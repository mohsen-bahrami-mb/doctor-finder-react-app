import { IoCloseCircleSharp } from "react-icons/io5";
import React from "react";
import useNewUser from "../../stores/useNewUser";

const UserModal = () => {
  const { onUserClose } = useNewUser();

  return (
    <div className="fixed inset-0 bg-black z-50 bg-opacity-70">
      <div className="w-96 md:w-[450px] bg-white p-5 rounded-md m-auto mt-20">
        <div className="flex items-center justify-between">
          <h2 className="text-xl text-slate-900 font-bold mb-4">کاربر جدید</h2>
          <IoCloseCircleSharp
            onClick={() => onUserClose()}
            className="text-gray-500 text-2xl duration-200 cursor-pointer hover:text-red-600"
          />
        </div>
      </div>
    </div>
  );
};

export default UserModal;
