import Logo from "../navbar/Logo";
import Menu from "../navbar/Menu";
import NavLinks from "../navbar/NavLinks";
import React from "react";
import Register from "../navbar/Register";

const Header = () => {
  return (
    <div className="flex sticky items-center justify-between bg-white shadow-md px-10 xl:px-20 py-5">
      <Menu />
      <NavLinks />
      <Logo />
      <Register />
    </div>
  );
};

export default Header;
