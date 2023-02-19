import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ title, data = [], value, setValue }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !dropdownRef.current.contains(event.target)) {
        handleDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);
  return (
    <div ref={dropdownRef}>
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="text-primary bg-light_primary border-2 border-primary font-medium rounded-lg text-md px-4 py-4 text-center flex justify-between items-center w-[500px]"
        type="button"
        onClick={handleDropdown}
      >
        <span>{value === "" ? title : value}</span>
        <svg
          className={`w-4 h-4 ml-2 transition-all duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>

      <div
        id="dropdown"
        className={`${
          isOpen ? "scale-y-100" : "scale-y-0 -translate-y-[50%]"
        } z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow-md w-[500px] mt-2 transition-all ease-linear duration-200`}
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefaultButton"
        >
          {data.length > 0 &&
            data.map((item, key) => {
              return (
                <li key={key}>
                  <div
                    className="rounded-lg px-4 py-4 text-md font-medium hover:bg-primary hover:text-white text-primary w-full select-none cursor-pointer"
                    onClick={() => {
                      setValue(item.value);
                      handleDropdown(item.value);
                    }}
                  >
                    {item.value}
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
