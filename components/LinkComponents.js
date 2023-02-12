import React from "react";
import {
  AiOutlinePieChart,
  AiOutlineSetting,
  AiOutlineLogout,
} from "react-icons/ai";
import { BsBoxSeam, BsPlusCircle } from "react-icons/bs";
import NavLink from "./Link";
import Button from "./Button";

const LinkComponents = () => {
  return (
    <div className="flex flex-col justify-between p-2 gap-4 h-[90%]">
      {/* Menu  */}
      <div className="flex flex-col p-2 gap-4">
        <div className="text-lg font-bold text-primary border-2 border-primary bg-transparent py-3 rounded-2xl px-4">
          មុឺនុយ
        </div>
        <NavLink href="/" label="ស្ថិតិមុខជំនួញ" icon={<AiOutlinePieChart />} />

        <NavLink href="/products" label="ផលិតផល" icon={<BsBoxSeam />} />
        <NavLink
          href="/create"
          label="បញ្ចូលទិន្នន័យថ្មី"
          icon={<BsPlusCircle />}
        />
      </div>
      {/* Account */}
      <div className="flex flex-col p-2 gap-4">
        <div className="text-lg font-bold text-primary border-2 border-primary bg-transparent py-3 rounded-2xl px-4">
          គណនី
        </div>
        <NavLink
          href="/settings"
          label="ការកំណត់កម្មវិធី"
          icon={<AiOutlineSetting />}
        />
        <Button
          label="ចាកចេញពីគណនី"
          icon={<AiOutlineLogout />}
          onClick={() => alert("Clicked")}
        />
      </div>
    </div>
  );
};

export default LinkComponents;
