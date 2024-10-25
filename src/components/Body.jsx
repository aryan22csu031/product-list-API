import React from "react";
import Product from "./Product";

const Body = () => {
  return (
    <div className="flex flex-col items-center p-2">
      <h1 className="text-4xl font-semibold">PRODUCTS</h1>
      <Product />
    </div>
  );
};

export default Body;
