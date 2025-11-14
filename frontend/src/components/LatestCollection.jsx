import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
  const { products } = useContext(ShopContext); // Merr produktet nga context
  const [latestProducts, setLatestProducts] = useState([]); //jemi duke marre nje state/array bosh per produktet e fundit

  useEffect(() => {
    setLatestProducts(products.slice(0, 10)); // Merr 10 produktet
  }, [products]);

  // console.log(products); testim nese po vijn produktet

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"KOLEKSIONI"} text2={"I FUNDIT"} />{" "}
        {/* Komponenti Title */}
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Zbuloni produktet më të reja dhe trendet që sapo kanë mbërritur.
        </p>
      </div>

      {/* Renderimi i produkteve */}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {latestProducts.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
