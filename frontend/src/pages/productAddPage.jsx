import React, { useEffect, useState } from "react";
import Header from "../components/header";
import Dashboard from "../components/dashboard";
import {
  useAddProductMutation,
  useProductDetailQuery,
  useUpdateProductMutation,
} from "../redux/features/product";
import { message } from "antd";
import { useNavigate, useParams } from "react-router-dom";

const ProductAddPage = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const [addProduct] = useAddProductMutation();
  const [updateProduct] = useUpdateProductMutation();
  const productDetail = useProductDetailQuery(id);

  // State variables to hold form data
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    picture: null,
  });

  useEffect(() => {
    if (productDetail.isSuccess) setFormData(productDetail.data.product);
  }, [productDetail]);

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  // Function to handle file input change
  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      picture: e.target.files[0],
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const productFormData = new FormData();
    productFormData.append("name", formData.name);
    productFormData.append("description", formData.description);
    productFormData.append("price", formData.price);
    productFormData.append("picture", formData.picture);

    if (id) {
      updateProduct({ id, data: productFormData })
        .unwrap()
        .then((res) => {
          if (res.success) {
            setFormData({
              name: "",
              description: "",
              price: "",
              picture: null,
            });
            message.success("Product updated successfully");
            navigate("/store/edit");
          } else {
            message.error("Failed to update video");
          }
        });
    } else {
      addProduct(productFormData)
        .unwrap()
        .then((res) => {
          if (res.success) {
            setFormData({
              name: "",
              description: "",
              price: "",
              picture: null,
            });
            message.success("Product uploaded successfully");
            navigate("/store/edit");
          } else {
            message.error("Failed to upload video");
          }
        });
    }
  };

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
              <div className="flex justify-center items-center">
                <div className="flex justify-center items-center bg-black w-full rounded-lg p-10 !text-black">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label
                        htmlFor="name"
                        className="block text-white text-sm font-bold text-gray-700"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 mt-1 text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 text-white"
                        placeholder="Enter name"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="description"
                        className="block text-sm font-bold text-gray-700 text-white"
                      >
                        Description
                      </label>
                      <textarea
                        id="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        rows={6}
                        className="w-full px-3 py-2 mt-1 text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 text-white"
                        placeholder="Enter description"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="price"
                        className="block text-sm font-bold text-gray-700 text-white"
                      >
                        Price
                      </label>
                      <input
                        type="number"
                        id="price"
                        value={formData.price}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 mt-1 text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 text-white"
                        placeholder="Enter price"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="picture"
                        className="block text-sm font-bold text-gray-700 text-white"
                      >
                        Picture
                      </label>
                      <input
                        type="file"
                        id="picture"
                        onChange={handleFileChange}
                        className="w-full px-3 py-2 mt-1 text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 text-white"
                      />
                    </div>
                    <button
                      type="submit"
                      className="bg-custom-purple text-white py-2 px-4 mt-6"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductAddPage;
