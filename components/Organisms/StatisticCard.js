import React from "react";
import { Progress } from "antd";

const StatisticCard = ({
  title = "title",
  icon,
  amount = 0,
  type = "none",
  isPieShow = true,
  image,
  size = "large",
  className = "",
}) => {
  const cardSize = () => {
    if (size === "large") return "w-[400px]";
    else if (size === "medium") return "w-[300px]";
    else if (size === "small") return "w-[200px]";
  };
  return (
    <div
      className={`${cardSize()} bg-white h-[150px] flex justify-between p-4 items-center gap-2 rounded-2xl shadow-md hover:bg-light_primary transition-all duration-200 ${className}`}
    >
      <div className="flex flex-col justify-center gap-4 w-2/3 h-full">
        <span className="text-primary font-bold">{title}</span>
        <div className="flex gap-2 items-center">
          <p className="text-primary text-3xl">{icon}</p>
          <span className="text-black text-xl font-bold opacity-70 overflow-ellipsis">
            {amount && amount.toLocaleString()}
          </span>
          <span className="text-secondary font-bold opacity-50">{type}</span>
        </div>
      </div>
      {isPieShow ? (
        <Progress
          type="circle"
          percent={50}
          width={100}
          strokeColor="#6d28d9"
          trailColor="#f5f3ff"
          className="w-1/3"
        />
      ) : (
        ""
      )}

      {image ? <div>{image}</div> : ""}
    </div>
  );
};

export default StatisticCard;
