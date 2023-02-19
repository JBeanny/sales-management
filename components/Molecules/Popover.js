import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Popover } from "antd";

const CustomPopover = ({ product }) => {
  const [editClick, setEditClick] = useState(false);
  const handleEdit = () => {};

  const PopoverContent = ({ product }) => {
    return (
      <div className="flex flex-col">
        <div className="rounded-md px-4 py-2 cursor-pointer w-full bg-white text-primary hover:bg-primary hover:text-white ">
          Detail
        </div>
        <div className="rounded-md px-4 py-2 cursor-pointer w-full bg-white text-primary hover:bg-primary hover:text-white ">
          Edit
        </div>
        <div className="rounded-md px-4 py-2 cursor-pointer w-full bg-white text-primary hover:bg-primary hover:text-white ">
          Delete
        </div>
      </div>
    );
  };
  return (
    <Popover placement="leftTop" content={<PopoverContent product={product} />}>
      <button className="font-medium text-primary hover:bg-light_primary px-2 py-2 rounded-md transition-all duration-200">
        <BsThreeDotsVertical />
      </button>
    </Popover>
  );
};

export default CustomPopover;
