import React from "react";

const Button = ({ label, icon, onClick }) => {
  return (
    <div
      className="flex gap-4 items-center p-2 border-2 border-transparent hover:border-primary hover:rounded-2xl transition-all cursor-pointer"
      onClick={onClick}
    >
      <div className="text-primary text-3xl">{icon}</div>
      <span className="text-md font-medium text-secondary">{label}</span>
    </div>
  );
};

export default Button;
