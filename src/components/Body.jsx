import React from "react";
import Product from "./Product";

const Body = () => {
  return (
    <div className="flex flex-col items-center p-2 bg-red-950">
      <h1 className="text-8xl font-extrabold text-white">PRODUCTS</h1>
      <Product />
    </div>
  );
};

export default Body;
