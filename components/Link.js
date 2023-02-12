import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const NavLink = ({ href, label, icon }) => {
  const router = useRouter();
  const BgStyle =
    router.pathname === href
      ? "flex gap-4 items-center p-2 border-2 border-transparent hover:border-primary hover:rounded-2xl transition-all bg-white rounded-2xl"
      : "flex gap-4 items-center p-2 border-2 border-transparent hover:border-primary hover:rounded-2xl transition-all";

  const labelStyle =
    router.pathname === href
      ? "text-md font-medium text-primary"
      : "text-md font-medium text-secondary";

  return (
    <Link href={href} className={BgStyle}>
      <div className="text-primary text-3xl">{icon}</div>
      <span className={labelStyle}>{label}</span>
    </Link>
  );
};

export default NavLink;
