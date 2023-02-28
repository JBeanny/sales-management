import React from "react";
import { Navbar } from "./Organisms";

const Layout = ({ children }) => {
  return (
    <>
      <div className="w-1/4">
        <Navbar />
      </div>
      <div className="w-3/4">{children}</div>
    </>
  );
};

export default Layout;
