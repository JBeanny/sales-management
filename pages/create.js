import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import { Dropdown } from "@/components/Atoms";
import { categories, units } from "@/data";
import { fetchApi } from "@/helper/FetchAPI";
import { Alert } from "antd";
import { FormSample } from "@/components/Organisms";

//schema
const ProductSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  subname: Yup.string().required("Subname is required"),
  price: Yup.number().required("Price is required"),
});

const create = () => {
  const [category, setCategory] = useState("");
  const [unit, setUnit] = useState("");
  const [alert, setAlert] = useState(false);
  const [message, setMessage] = useState("");

  const initialValues = {
    name: "",
    subname: "",
    price: "",
  };

  const clearForm = () => {
    initialValues.name = "";
    initialValues.subname = "";
    initialValues.price = "";
    setUnit("");
    setCategory("");
  };

  const addProduct = async (data) => {
    await fetchApi("/products", "POST", data)
      .then((res) => {
        if (res) {
          setAlert(true);
          setMessage("Successfully Added");
          clearForm();
        }
      })
      .catch((err) => {
        setMessage("Failed");
      });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ProductSchema}
      onSubmit={async (values) => {
        if (values && category && unit) {
          const data = {
            name: values.name,
            subname: values.subname,
            price: values.price,
            unit: unit,
            category: category,
          };
          await addProduct(data);
        }
      }}
    >
      <div className="flex justify-between items-center w-[90%]">
        {alert ? (
          <Alert
            message={message}
            type="success"
            closable
            className="absolute right-[10px] top-[10px]"
          />
        ) : (
          ""
        )}
        <Form className="flex flex-col pt-4 gap-4 h-screen justify-center">
          <span className="text-2xl text-primary font-medium">
            បញ្ជីបញ្ចូលទំនិញ
          </span>
          <Field
            name="name"
            placeholder="ឈ្មោះទំនិញ"
            className="bg-light_primary border-2 border-primary text-primary py-4 px-4 w-[500px] h-[60px] rounded-lg outline-none"
          />
          <Field
            name="subname"
            placeholder="ឈ្មោះបន្ទាប់បន្សំទំនិញ"
            className="bg-light_primary border-2 border-primary text-primary py-4 px-4 w-[500px] h-[60px] rounded-lg outline-none"
          />
          <Field
            name="price"
            type="number"
            placeholder="តម្លៃ"
            className="bg-light_primary border-2 border-primary text-primary py-4 px-4 w-[500px] h-[60px] rounded-lg outline-none"
          />

          {/* dropdown catgegory input */}
          <Dropdown
            title="ប្រភេទនៃការលក់"
            data={units}
            value={unit}
            setValue={setUnit}
            width="500px"
          />
          <Dropdown
            title="ប្រភេទទំនិញ"
            data={categories}
            value={category}
            setValue={setCategory}
            width="500px"
          />

          <button
            type="submit"
            className="bg-primary text-white rounded-lg py-4 w-[500px]"
          >
            បញ្ចូលទំនិញ
          </button>

          {/* sample data */}
          <FormSample />
        </Form>
        <div className="relative">
          <Image
            src="/Images/form-image.png"
            alt="Image"
            width={300}
            height={300}
            className="animate-bounce"
          />
        </div>
      </div>
    </Formik>
  );
};

export default create;
