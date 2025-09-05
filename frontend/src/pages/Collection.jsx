import React from "react";
import { ShopContext } from "../context/ShopContext";
import { useContext } from "react";
import { products } from "../assets/assets";
import { useState } from "react";
import { assets } from "../assets/assets";

const Collection = () => {
  const { products } = useContext(ShopContext); // Access products from context
  const [showFilter, setShowFilter] = useState(false); // State to toggle filter visibility

  return (
    /*
      Filtrat (Filters) section
    */
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)} //Logjika per toggle ne small screens
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          FILTRO
          <img
            className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`} // rrotullo icon ne toggle
            src={assets.dropdown_icon}
            alt=""
          />
        </p>

        {/* Filtrat e Kategorive */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`} // show/hide filter ne small screens
        >
          <p className="mb-3 text-sm font-medium">KATEGORITË</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Men"} />
              Meshkuj
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Women"} />
              Femra
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Kids"} />
              Femije
            </p>
          </div>
        </div>
        {/* Subcategory filtra */}
        <div
          className={`border border-gray-300 pl-5 py-3 my-5 ${
            showFilter ? "" : "hidden"
          } sm:block`} // show/hide filter ne small screens
        >
          <p className="mb-3 text-sm font-medium">LLOJI</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Topwear"} />
              Veshje të sipërme
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Bottomwear"} />
              Veshje të poshtme
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Winterwear"} />
              Veshje dimri
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
