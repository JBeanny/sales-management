import React from "react";
import ExcelDataGenerator from "../../helper/ExcelDataGenerator";
import { AiOutlineDownload } from "react-icons/ai";

const ExcelDownloadButton = ({ data }) => {
  return (
    <button
      className="bg-light_primary rounded-lg px-4 py-2 text-primary flex gap-2 justify-center items-center"
      onClick={() => ExcelDataGenerator(data)}
    >
      <span>{<AiOutlineDownload />}</span>
      <span>ទាញយក</span>
    </button>
  );
};

export default ExcelDownloadButton;
