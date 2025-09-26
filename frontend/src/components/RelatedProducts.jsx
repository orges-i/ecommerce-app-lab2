import React, { useEffect } from "react";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { useState } from "react";
import ProductItem from "./ProductItem";
import Title from "./Title";

const RelatedProducts = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  //logjica per mi filter produktet e ngjashme
  useEffect(() => {
    if (products.length > 0) {
      let productsCopy = products.slice(); // Krijo nje kopje te products array
      productsCopy = productsCopy.filter((item) => category === item.category); // Filtron produktet sipas category
      productsCopy = productsCopy.filter(
        (item) => subCategory === item.subCategory
      ); // Filtron produktet sipas subCategory

      setRelated(productsCopy.slice(0, 5));
    }
  }, [products]);

  return (
    <div className="my-24">
      <div className="text-center text-3xl py-2">
        <Title text1={"PRODUKTET"} text2={"E NGJAJSHME"} />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {related.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            name={item.name}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
