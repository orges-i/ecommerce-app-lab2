import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { ShopContext } from "../context/shopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const { products } = useContext(ShopContext); //Merrni produktet nga Shop Context
  const [bestSeller, setBestSeller] = useState([]); //State për produktet më të shitura

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller); //Merr vetem produktet më të shitura
    setBestSeller(bestProduct.slice(0, 5)); //Merr vetëm 5 produkte dhe i ruan ato ne state
  }, []);

  return (
    //Frontend për seksionin e produkteve më të shitura
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <Title text1="MË TË" text2="SHITURAT" />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Shfletoni koleksionin tonë të produkteve më të shitura !
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {bestSeller.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            name={item.name}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
