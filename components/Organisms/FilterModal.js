import React, { useState } from "react";
import { Dropdown } from "../Atoms";
import { categories, units } from "@/data";

const FilterModal = ({ modalOpen, setModalOpen }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedUnit, setSelectedUnit] = useState("");

  return (
    <div
      className={`${
        modalOpen ? "scale-y-100" : "scale-y-0 -translate-y-[50%]"
      } absolute left-[50%] top-[50%] -ml-[400px] -mt-[300px] bg-white shadow-xl w-[800px] h-[600px] rounded-2xl z-50 duration-200 transition-all flex flex-col gap-4 p-4`}
    >
      <div>
        <p className="text-secondary font-medium opacity-50">ប្រភេទនៃទំនិញ</p>
        <Dropdown
          title="សូមជ្រើសរើស"
          data={categories}
          value={selectedCategory}
          setValue={setSelectedCategory}
          width="300px"
          paddingY="3"
        />
      </div>
      <div>
        <p className="text-secondary font-medium opacity-50">ប្រភេទនៃការលក់</p>
        <Dropdown
          title="សូមជ្រើសរើស"
          data={units}
          value={selectedUnit}
          setValue={setSelectedUnit}
          width="300px"
          paddingY="3"
        />
      </div>
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          defaultValue={true}
          className="w-[25px] h-[25px] outline-primary rounded-2xl"
        />
        <span className="font-medium text-primary">តម្លៃថ្លៃ</span>
      </div>
      <div className="flex gap-4 fixed bottom-[20px] right-[20px]">
        <button
          className="w-[100px] h-[40px] rounded-lg text-primary bg-light_primary"
          onClick={() => setModalOpen(false)}
        >
          បិទ
        </button>
        <button className="w-[100px] h-[40px] rounded-lg text-white bg-primary">
          យល់ព្រម
        </button>
      </div>
    </div>
  );
};

export default FilterModal;
