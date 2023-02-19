import React, { useState } from "react";
import { NextIcon, PreviousIcon } from "@/public/SVG";

const PaginationButtons = ({ setUrl, links }) => {
  const [page, setPage] = useState("1");

  const handleNext = () => {
    setUrl(links.next);
    setPage(links.next.split("&")[0].split("offset")[1].split("=")[1]);
  };

  const handlePrevious = () => {
    setUrl(links.previous);
    setPage(links.previous.split("&")[0].split("offset")[1].split("=")[1]);
  };

  return (
    <div className="flex gap-4 absolute bottom-[30px] right-0 items-center">
      {links.previous ? (
        <button
          className="rounded-md p-2 text-primary bg-light_primary font-bold hover:border-primary border-2 border-transparent transition-all duration-200"
          onClick={handlePrevious}
        >
          <PreviousIcon />
        </button>
      ) : (
        ""
      )}
      <div className="text-primary">ទំព័រទី {page}</div>
      {links.next ? (
        <button
          className="rounded-md p-2 text-primary bg-light_primary font-bold hover:border-primary border-2 border-transparent transition-all duration-200"
          onClick={handleNext}
        >
          <NextIcon />
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default PaginationButtons;
