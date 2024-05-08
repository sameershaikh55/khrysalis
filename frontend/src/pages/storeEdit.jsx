import React, { useState } from "react";
import Header from "../components/header";
import Dashboard from "../components/dashboard";
import {
  useAllProductsQuery,
  useDeleteProductMutation,
} from "../redux/features/product";
import { Link } from "react-router-dom";
import { message } from "antd";

const upload_url = process.env.REACT_APP_ASSET_URL;

const StoreEdit = () => {
  const { data, isLoading } = useAllProductsQuery();
  const [deleteProduct] = useDeleteProductMutation();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-black-false pb-20 min-h-screen">
      <div className="max-w-screen-xl m-auto">
        <Header />
        <div className="px-4">
          <div className="flex justify-between relative top-[72px]">
            <div className="!w-[14%]">
              <Dashboard />
            </div>

            <div className="w-[86%]">
              <table className="w-full bg-gray-800 text-white">
                <thead>
                  <tr>
                    <th className="py-2 px-4 text-start">Name</th>
                    <th className="py-2 px-4 text-start">Description</th>
                    <th className="py-2 px-4 text-start">Price</th>
                    <th className="py-2 px-4 text-start">Picture</th>
                    <th className="py-2 px-4 text-start">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {data.products.map((item, index) => (
                    <tr key={index}>
                      <td className="py-2 px-4">{item.name}</td>
                      <td className="py-2 px-4">{item.description}</td>
                      <td className="py-2 px-4">{item.price}</td>
                      <td className="py-2 px-4">
                        <a
                          href={item.picture}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src={upload_url + item.picture}
                            alt={item.name}
                            className="w-12 h-12"
                          />
                        </a>
                      </td>
                      <td className="py-2 px-4">
                        <Link to={`/store/product/edit/${item._id}`}>
                          <button className="text-yellow-500 mx-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                              />
                            </svg>
                          </button>
                        </Link>
                        <button
                          onClick={() =>
                            deleteProduct({ id: item._id }).then(() =>
                              message.success("Product Deleted!")
                            )
                          }
                          className="text-red-500 mx-1"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-7 w-7"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreEdit;
