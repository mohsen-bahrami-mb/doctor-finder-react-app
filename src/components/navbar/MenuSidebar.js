import { FaStethoscope, FaUserDoctor } from "react-icons/fa6";
import { MdOutlineArticle, MdOutlineSick } from "react-icons/md";
import React, { useState } from "react";

import { RiCloseCircleFill } from "react-icons/ri";
import { SiSkypeforbusiness } from "react-icons/si";
import { getAllLinks } from "../../constants/data";
import logo from "../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";
import useOpen from "../../stores/useOpen";

const icons = [
  { id: 1, option: "online", name: <SiSkypeforbusiness /> },
  { id: 2, option: "specialist", name: <FaUserDoctor /> },
  { id: 3, option: "blog", name: <MdOutlineArticle /> },
  { id: 4, option: "patient", name: <MdOutlineSick /> },
];
const MenuSidebar = () => {
  const links = getAllLinks();
  const [tab, setTab] = useState("patient");
  const navigate = useNavigate();
  const { isOpen, onClose } = useOpen();
  let p;
  switch (tab) {
    case "online":
      p = "مشاوره آنلاین پزشکی";
      break;
    case "specialist":
      p = "تخصص ها";
      break;
    case "blog":
      p = "مجله سلامتی";
      break;
    case "patient":
      p = "بیماران";
      break;
    default:
      break;
  }

  return (
    <div
      className={`fixed top-0 z-50 shadow-lg bg-white h-full ${
        isOpen ? "right-0" : "-right-72"
      } w-72 duration-300 flex lg:hidden`}
    >
      <div className="w-[20%] flex flex-col items-center py-5 bg-opacity-20 bg-gray-400">
        <RiCloseCircleFill
          onClick={onClose}
          className="text-red-600 hover:text-red-700 duration-200 cursor-pointer"
        />
        <FaStethoscope
          onClick={() => navigate("/")}
          className="my-10 text-xl cursor-pointer text-blue-900 hover:text-blue-600 duration-200"
        />
        <div className="flex flex-col gap-7 text-xl ">
          {icons.map(({ id, name, option }) => (
            <div
              key={id}
              onClick={() => setTab(option)}
              className={`text-gray-500 hover:text-white duration-200 cursor-pointer hover:bg-[#0E82FD] ${
                tab === option && "text-white bg-[#0E82FD]"
              } w-7 h-7 flex items-center justify-center rounded-lg p-1`}
            >
              {name}
            </div>
          ))}
        </div>
      </div>
      <div className={`w-[80%] bg-white duration-200 py-5`}>
        <div
          onClick={() => navigate("/")}
          className="flex items-center cursor-pointer justify-center border-b pb-4 "
        >
          <img src={logo} alt="logo" className="w-24" />
        </div>
        <div className="relative">
          <h2 className="p-3 text-white absolute right-0 w-full top-0 font-bold text-md text-center bg-blue-300">
            {p}
          </h2>
          <div className="p-2 h-screen overflow-y-auto">
            {links?.map(({ items, id, slug }) => (
              <div
                key={id}
                className={`${tab === slug ? "block" : "hidden"} mt-14`}
              >
                {items?.map(({ label, id }) => (
                  <p
                    key={id}
                    className="text-sm hover:bg-[#0E82FD] duration-200 cursor-pointer hover:text-white rounded-md text-gray-500 font-semibold my-3 p-2"
                  >
                    {label}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuSidebar;
