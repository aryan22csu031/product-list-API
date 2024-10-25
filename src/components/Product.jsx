import React, { useEffect, useState } from "react";
import axios from "axios";
const Product = () => {
  const [productList, setProductList] = useState([]);
  const handleProducts = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/products");
      console.log(res.data.products);
      const products = res.data.products;
      setProductList(products);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleProducts();
  }, []);
  return (
    <div className="flex flex-wrap gap-4 justify-center p-4">
      {productList.map((i) => {
        return (
          <>
            <div className="flex flex-col justify-between items-center m-1 p-3 border border-black h-[24rem] w-[18rem] rounded-lg shadow-lg overflow-hidden">
              <img
                src={i.images[0]}
                className="w-40 h-40 object-cover rounded-lg border-2 border-gray-300"
              />
              <div className="flex flex-col justify-between w-full h-full mt-2 text-center">
                <h1 className="font-bold text-lg">{i.title}</h1>
                <p className="text-sm text-black px-2 overflow-hidden text-ellipsis max-h-16">
                  {i.description}
                </p>
                <h1 className="text-lg font-semibold">Rs.{i.price}</h1>
                <button className="mb-2 px-4 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition duration-200">
                  BUY
                </button>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Product;
