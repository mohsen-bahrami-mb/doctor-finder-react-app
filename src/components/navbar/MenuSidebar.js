import { FaStethoscope, FaUserDoctor } from "react-icons/fa6";
import { MdOutlineArticle, MdOutlineSick } from "react-icons/md";
import React, { useState } from "react";

import { LiaUserNurseSolid } from "react-icons/lia";
import { RiCloseCircleFill } from "react-icons/ri";
import { SiSkypeforbusiness } from "react-icons/si";
import { getAllLinks } from "../../utils/data";
import logo from "../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";

const icons = [
  { id: 1, option: "online", name: <SiSkypeforbusiness /> },
  { id: 2, option: "specialist", name: <FaUserDoctor /> },
  { id: 3, option: "blog", name: <MdOutlineArticle /> },
  { id: 4, option: "patient", name: <MdOutlineSick /> },
  { id: 5, option: "login", name: <LiaUserNurseSolid /> },
];
const MenuSidebar = ({ open, setOpen }) => {
  const links = getAllLinks();
  const [tab, setTab] = useState("patient");
  const [close, setClose] = useState(false);
  const navigate = useNavigate();
  return (
    <div
      className={`fixed top-0 shadow-lg bg-white h-full ${
        open ? "right-0" : "-right-72"
      } w-72 duration-300 flex`}
    >
      <div className="w-[20%] flex flex-col items-center py-5 bg-opacity-20 bg-gray-400">
        <RiCloseCircleFill
          onClick={() => setOpen(false)}
          className="text-red-600 hover:text-red-700 duration-200 cursor-pointer"
        />
        <FaStethoscope
          onClick={() => navigate("/")}
          className="my-10 text-xl cursor-pointer text-blue-900 hover:text-blue-600 duration-200"
        />
        <div className="flex flex-col gap-7 text-xl ">
          {icons.map(({ id, name, option }) => (
            <div
              onClick={() => setTab(option)}
              className={`text-gray-500 hover:text-white duration-200 cursor-pointer hover:bg-[#0E82FD] ${
                tab === option && "text-white bg-[#0E82FD]"
              } w-7 h-7 flex items-center justify-center rounded-lg p-1`}
              key={id}
            >
              {name}
            </div>
          ))}
        </div>
      </div>
      <div className={`w-[80%] bg-white duration-200 py-5`}>
        <div onClick={()=> navigate('/')} className="flex items-center cursor-pointer justify-center border-b pb-4 ">
          <img src={logo} alt="logo" className="w-24" />
        </div>
        <div className="p-2 h-screen overflow-y-auto">
          {links?.map(({ items, id, slug }) => (
            <div key={id} className={`${tab === slug ? "block" : "hidden"}`}>
              {items?.map(({ label }) => (
                <p className="text-sm hover:bg-[#0E82FD] duration-200 cursor-pointer hover:text-white rounded-md text-gray-500 font-semibold my-3 p-2">
                  {label}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuSidebar;
