import React, { useState } from 'react';

import { HiMenuAlt3 } from "react-icons/hi";
import MenuSidebar from "./MenuSidebar";

const Menu = () => {
  const [open, setOpen] = useState(false);
    
    return (
        <div className="lg:hidden">
            <HiMenuAlt3 onClick={()=> setOpen(true)} className="text-3xl hover:text-[#0E82FD] duration-200 cursor-pointer text-slate-900" />
            <MenuSidebar open={open} setOpen={setOpen}/>
        </div>
    );
};

export default Menu;