import React, { useState, useEffect, useRef } from "react";
import { DataDeserializer } from "@/helper/Deserializer";
import { Search, PaginationButtons } from "@/components/Molecules";
import { FilterIcon } from "@/public/SVG";
import { FilterModal, ProductTable } from "@/components/Organisms";
import { ExcelDownloadButton } from "@/components/Atoms";

const products = ({ data }) => {
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const tableRef = useRef(null);

  const [url, setUrl] = useState(
    "http://localhost:8080/api/v1/products?page[offset]=1&page[limit]=10"
  );

  const fetchProducts = async () => {
    const data = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    setProducts(await DataDeserializer(await data.json()));
  };

  useEffect(() => {
    fetchProducts();
  }, [url]);

  console.log(url);

  return (
    <div className="w-[90%] relative h-screen overflow-hidden">
      <div className="pt-4 flex justify-between items-center">
        <div className="text-2xl text-primary font-medium">
          ផលិតផលទាំងអស់: {data.length !== 0 ? data.length : 0}
        </div>
        <ExcelDownloadButton tableRef={tableRef} data={data} />
        <div className="flex gap-10">
          <div
            className="bg-light_primary rounded-md p-3 border-2 border-transparent cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          >
            <FilterIcon />
          </div>
          <Search
            url={url}
            setUrl={setUrl}
            currLink={products[0]?.links.self}
          />
        </div>
      </div>
      <FilterModal
        modalOpen={isModalOpen}
        setModalOpen={setIsModalOpen}
        setUrl={setUrl}
        url={url}
      />

      {/* table  */}
      {products.length === 0 ? (
        <div className="flex justify-center items-center pt-20 text-2xl text-primary font-bold">
          គ្មានផលិតផល &#9785;
        </div>
      ) : (
        <>
          <ProductTable products={products} tableRef={tableRef} />
          <PaginationButtons setUrl={setUrl} links={products[0].links} />
        </>
      )}
    </div>
  );
};

export async function getServerSideProps(context) {
  const data = await fetch(`http://localhost:8080/api/v1/products`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  let products = await DataDeserializer(await data.json());

  return {
    props: {
      data: products,
    },
  };
}

export default products;
