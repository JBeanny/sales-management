import React from "react";
import { BsSearch, BsThreeDotsVertical } from "react-icons/bs";
import { NextIcon, PreviousIcon } from "@/public/SVG";

const products = ({ products }) => {
  if (products.data.length === 0) {
    return (
      <div className="absolute left-[50%] top-[50%] text-2xl text-primary font-bold">
        គ្មានផលិតផល &#9785;
      </div>
    );
  }
  return (
    <div className="w-[90%] relative h-screen overflow-hidden">
      <div className="pt-4 flex justify-between items-center">
        <div className="text-2xl text-primary font-medium">
          ផលិតផលទាំងអស់: {products.data.length}
        </div>
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="ស្វែងរក..."
            className="bg-white border-2 border-primary rounded-md py-2 px-4 focus:outline-none text-sm"
          />
          <button className="bg-light_primary text-primary px-4 rounded-md text-sm hover:border-primary transition-all duration-200 border-2 border-transparent">
            <BsSearch />
          </button>
        </div>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-4">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-md font-medium text-primary uppercase bg-light_primary">
            <tr>
              <th scope="col" className="px-6 py-3">
                លេខសម្គាល់ផលិតផល (ID)
              </th>
              <th scope="col" className="px-6 py-3">
                ឈ្មោះផលិតផល
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                  ប្រភេទទំនិញ
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 h-3 ml-1"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 320 512"
                    >
                      <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                    </svg>
                  </a>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                  តម្លៃ
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 h-3 ml-1"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 320 512"
                    >
                      <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                    </svg>
                  </a>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {products.data.map((product, index) => {
              return (
                <tr className="bg-white text-secondary" key={index}>
                  <td className="px-6 py-4">{product.pid}</td>
                  <td className="px-6 py-4">{product.name}</td>
                  <td className="px-6 py-4">{product.category}</td>
                  <td className="px-6 py-4">៛ {product.price}</td>
                  <td className="px-4 py-4 text-right">
                    <button className="font-medium text-primary hover:bg-light_primary px-2 py-2 rounded-md transition-all duration-200">
                      <BsThreeDotsVertical />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="flex gap-4 absolute bottom-[30px] right-0 items-center">
        <button className="rounded-md p-2 text-primary bg-light_primary font-bold hover:border-primary border-2 border-transparent transition-all duration-200">
          <PreviousIcon />
        </button>
        <div className="text-primary">ទំព័រទី 1</div>
        <button className="rounded-md p-2 text-primary bg-light_primary font-bold hover:border-primary border-2 border-transparent transition-all duration-200">
          <NextIcon />
        </button>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const data = await fetch("http://localhost:8080/api/v1/products", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const products = await data.json();

  return {
    props: {
      products: products,
    },
  };
}

export default products;
