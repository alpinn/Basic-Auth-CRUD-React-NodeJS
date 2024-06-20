// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await axios.get("http://localhost:5000/products");
    setProducts(response.data);
  };

  const deleteProduct = async (productId) => {
    await axios.delete(`http://localhost:5000/products/${productId}`);
    getProducts();
  };

  return (
    <div
      className="
        relative overflow-x-auto
        "
    >
      <Link to="/products/add" className="rounded-full  bg-green-700 px-3 py-2">
        Add New Product
      </Link>
      <table
        className="
            w-full mt-8 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400
            "
      >
        <thead
          className="
            text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400    
            "
        >
          <tr>
            <th className="px-6 py-3">No</th>
            <th className="px-6 py-3">Product Name</th>
            <th className="px-6 py-3">Price</th>
            <th className="px-6 py-3">Created By</th>
            <th className="px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr
              key={product.uuid}
              className="
                    bg-white border-b dark:bg-gray-800 dark:border-gray-700
                    "
            >
              <td className="px-6 py-4">{index + 1}</td>
              <td className="px-6 py-4">{product.name}</td>
              <td className="px-6 py-4">{product.price}</td>
              <td className="px-6 py-4">{product.user.name}</td>
              <td>
                <Link
                  to={`/products/edit/${product.uuid}`}
                  className="
                              rounded-full  bg-blue-700 px-3 py-2
                              "
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteProduct(product.uuid)}
                  className="
                              rounded-full  bg-red-700 px-3 py-2
                              "
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
