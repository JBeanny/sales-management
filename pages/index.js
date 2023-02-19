import React from "react";
import { AiOutlineInbox } from "react-icons/ai";
import { TbFileInvoice } from "react-icons/tb";
import { GiMoneyStack } from "react-icons/gi";
import { BsCurrencyDollar } from "react-icons/bs";
import { FcLike } from "react-icons/fc";
import { LineChart, StatisticCard } from "@/components/Organisms";
import { MoneyIcon, StockIcon, OutOfStock } from "@/public/SVG";
import { DataDeserializer } from "@/helper/Deserializer";

const Home = ({ products }) => {
  return (
    <div className="max-w-[1200px] flex flex-col justify-center gap-8">
      <div className="flex gap-4 justify-between mt-4">
        <StatisticCard
          title="ការកម្មង់ប្រចាំខែ"
          icon={<AiOutlineInbox />}
          amount={10000}
          type="ការកម្មង់"
        />
        <StatisticCard
          title="ការកម្មង់ដែលជំពាក់"
          icon={<TbFileInvoice />}
          amount={10}
          type="ការកម្មង់"
          isPieShow={false}
          size="medium"
        />
        <StatisticCard
          title="ប្រាក់ប្រចាំខែ"
          icon={<GiMoneyStack />}
          amount={10050080000}
          type={<BsCurrencyDollar />}
          isPieShow={false}
          image={<MoneyIcon />}
        />
      </div>
      <div className="flex gap-4 justify-between">
        <div className="flex flex-col gap-4 justify-center items-center w-1/3 bg-light_primary rounded-2xl border-2 border-primary border-dashed">
          <div className="text-primary text-xl font-bold text-left w-[80%] pl-4">
            អំពីទំនិញ
          </div>
          <StatisticCard
            title="ចំនួនផលិតផលទាំងអស់"
            icon={<StockIcon />}
            amount={10000}
            type="ឥវ៉ាន់"
            isPieShow={false}
            size="medium"
          />
          <StatisticCard
            title="ចំនួនផលិតផលអស់ស្តុក"
            icon={<OutOfStock />}
            amount={10}
            type="ឥវ៉ាន់"
            isPieShow={false}
            size="medium"
          />
        </div>
        <div className="w-2/3 bg-white shadow-md rounded-2xl p-4">
          <LineChart />
        </div>
      </div>
      <div className="text-xl text-primary flex gap-2">
        <FcLike />
        <span>ទំនិញដែលមានប្រជាប្រិយភាព</span>
      </div>
      <div className="rounded-2xl shadow-md overflow-hidden">
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
                <div className="flex items-center">ប្រភេទទំនិញ</div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">តម្លៃ</div>
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => {
              return (
                <tr className="bg-white text-secondary" key={index}>
                  <td className="px-6 py-4">{product.id}</td>
                  <td className="px-6 py-4">{product.name}</td>
                  <td className="px-6 py-4">{product.category}</td>
                  <td className="px-6 py-4">៛ {product.price}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const data = await fetch(
    "http://localhost:8080/api/v1/products?page[limit]=3",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  let products = await DataDeserializer(await data.json());

  return {
    props: {
      products: products,
    },
  };
}

export default Home;
