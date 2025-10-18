import { createContext } from "react";
import { products } from "../assets/assets";
import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";

export const ShopContext = createContext();

//ketu kemi perdor context API pepr me kriju dhe nda te dhena globale ne te gjithe Web

const ShopContextProvider = (props) => {
  const currency = "€"; // Mundesh me ndrru valuten qysh te dush
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});

  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error("Ju lutem zgjidhni nje madhesi."); //Notifikim gabimi nese nuk eshte zgjedhur size
      return;
    }

    let cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1; // Nese ekziston produkti me ate size, rrit sasine
      } else {
        cartData[itemId][size] = 1; // Nese nuk ekziston ai size, krijo ate size me sasi 1
      }
    } else {
      cartData[itemId] = {}; // Krijo nje objekt te ri per ate produkt
      cartData[itemId][size] = 1; // Dhe shto size me sasi 1
    }

    setCartItems(cartData); // Update state me te dhena te reja
  };

  const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalCount += cartItems[items][item];
          }
        } catch (error) {}
      }
    }
    return totalCount; // Kthen numrin total te artikujve ne shporte
  };

  //   useEffect(() => {
  //     console.log(cartItems); //Shfaqje e te dhena te cartItems per qellime debug/testing
  //   }, [cartItems]);

  // Vlerat qe do te jene te aksesueshme nga context API
  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
