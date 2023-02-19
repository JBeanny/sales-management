import React from "react";
import { Field } from "formik";

const FormikInput = ({ name, placeholder, size = "lg" }) => {
  const getSize = () => {
    if (size === "lg") {
      return "py-4 px-4 w-[500px] h-[60px]";
    } else if (size === "medium") {
      return "py-3 px-3 w-[300px] h-[40px]";
    } else {
      return "py-2 px-2 w-[200px] h-[30px]";
    }
  };
  return (
    <Field
      name={name}
      placeholder={placeholder}
      className={`bg-light_primary border-2 border-primary text-primary ${getSize()} rounded-lg outline-none`}
    />
  );
};

export default FormikInput;
