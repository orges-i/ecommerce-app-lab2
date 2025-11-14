import React, { use, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import { useContext } from "react";
import { products } from "../assets/assets";
import { useState } from "react";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const { products } = useContext(ShopContext); // Access products from context
  const [showFilter, setShowFilter] = useState(false); // State to toggle filter visibility
  const [filterProducts, setFilterProducts] = useState([]); //State per te ruajtur produktet e filtruar
  const [category, setCategory] = useState([]); // State per te ruajtur kategorite e selektuara
  const [subCategory, setSubCategory] = useState([]); // State per te ruajtur nenkategorite e selektuara
  const [sortType, setSortType] = useState("relavant"); // State per te ruajtur llojin e sortimit

  // 2 arrow functions per te menaxhuar ndryshimet ne checkbox te kategorive dhe nenkategorive
  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      // Shto kategorine nese eshte selektuar
      setCategory((prev) => prev.filter((item) => item !== e.target.value)); // heq kategorine nese eshte deselektuar
    } else {
      setCategory((prev) => [...prev, e.target.value]); // shto kategorine nese eshte selektuar
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]); //logjika e njejte si me kategorite
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice(); // krijo nje kopje te produkteve origjinale
    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      ); // filtro produktet bazuar ne kategorite e selektuara}
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      ); // filtro produktet bazuar ne nenkategorite e selektuara
    }

    setFilterProducts(productsCopy); // perditeso state e produkteve te filtruar
  };

  // useEffect(() => { Not needed per arsye se kemi thirrur funksionin e filtrimit ne nje useEffect tjeter
  //   //use effect per te inicializuar produktet e filtruar
  //   setFilterProducts(products);
  // }, []);

  const sortProduct = () => {
    // funksion per te sortuar produktet
    // logjika e ngjajshme si me filtrimin e kategorive dhe nenkategorive

    let fpCopy = filterProducts.slice(); // krijo nje kopje te produkteve te filtruar
    switch (
      sortType //switch funksion per te menaxhuar llojet e ndryshme te sortimit
    ) {
      case "low-high":
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;

      default:
        applyFilter(); // nese nuk ka sortim te aplikohet filtrimi
        break;
    }
  };

  useEffect(() => {
    applyFilter(); // thirr funksionin e filtrimit sa here qe ndryshon state e kategorive ose nenkategorive
  }, [category, subCategory, products]);

  useEffect(() => {
    sortProduct(); // thirr funksionin e sortimit sa here qe ndryshon state e llojit te sortimit
  }, [sortType]);

  // useEffect(() => { Per te testuar logjiken e filtrimit
  //   // use effect per te filtruar produktet sa here qe ndryshon state e kategorive
  //   console.log(subCategory);
  // }, [subCategory]);

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
              <input
                className="w-3"
                type="checkbox"
                value={"Men"}
                onChange={toggleCategory} // menaxho ndryshimet ne checkbox
              />
              Meshkuj
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Women"}
                onChange={toggleCategory}
              />
              Femra
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Kids"}
                onChange={toggleCategory}
              />
              Femijë
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
              <input
                className="w-3"
                type="checkbox"
                value={"Topwear"}
                onChange={toggleSubCategory} // menaxho ndryshimet ne checkbox
              />
              Veshje të sipërme
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Bottomwear"}
                onChange={toggleSubCategory}
              />
              Veshje të poshtme
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Winterwear"}
                onChange={toggleSubCategory}
              />
              Veshje dimri
            </p>
          </div>
        </div>
      </div>

      {/* Right side Gridi i produkteve */}

      <div className="flex-1">
        <div className="flex flex-col sm:flex-row sm:justify-between gap-2 text-base sm:text-2xl mb-4">
          <Title text1={"TË GJITHA"} text2={"KOLEKSIONET"} />
          {/* Sortimi i produkteve */}
          <select
            onChange={(e) => setSortType(e.target.value)}
            className="border-2 border-gray-300 text-sm px-2"
          >
            <option value="relavant">Rendit sipas përkatësisë</option>
            <option value="low-high">
              Çmimi: nga më i ulëti tek më i larti
            </option>
            <option value="high-low">
              Çmimi: nga më i larti tek më i ulëti
            </option>
          </select>
        </div>
        {/* Map products */}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map((item, index) => (
            <ProductItem
              key={index}
              name={item.name}
              id={item._id}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
