import React from "react";
import LinkComponents from "./LinkComponents";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className="w-[300px] h-screen fixed left-0 bg-light_primary flex flex-col">
      {/* Logo  */}
      <Logo />

      {/* Links */}
      <LinkComponents />
    </div>
  );
};

export default Navbar;
