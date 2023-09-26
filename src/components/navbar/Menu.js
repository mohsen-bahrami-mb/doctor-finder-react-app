import { HiMenuAlt3 } from "react-icons/hi";
import React from "react";
import useOpen from './../../stores/useOpen';

const Menu = () => {
  const { onOpen } = useOpen();
  return (
    <div className="lg:hidden">
      <HiMenuAlt3
        onClick={onOpen}
        className="text-3xl hover:text-[#0E82FD] duration-200 cursor-pointer text-slate-900"
      />
    </div>
  );
};

export default Menu;
