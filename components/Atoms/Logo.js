import React from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <div className=" flex gap-2 items-center p-4">
      <Image src="/mom-logo-v2.png" width={80} height={80} alt="logo" />
      <span className="text-primary uppercase font-bold text-2xl tracking-wider">
        sreymoom
      </span>
    </div>
  );
};

export default Logo;
