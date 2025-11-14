import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const ShopContext = createContext();

//ketu kemi perdor context API pepr me kriju dhe nda te dhena globale ne te gjithe Web

const ShopContextProvider = (props) => {
  const currency = "€"; // Mundesh me ndrru valuten qysh te dush
  const delivery_fee = 10;
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

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

  const updateQuantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);

    cartData[itemId][size] = quantity;

    setCartItems(cartData); // Update state me te dhena te reja
  };

  const getCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      let itemInfo = products.find((product) => product._id === items);
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalAmount += itemInfo.price * cartItems[items][item];
          }
        } catch (error) {}
      }
    }
    return totalAmount; // Kthen shumen totale te shportes
  }; // Kthen shumen totale te shportes

  //   useEffect(() => {
  //     console.log(cartItems); //Shfaqje e te dhena te cartItems per qellime debug/testing
  //   }, [cartItems]);

  const getProductsData = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/product/list");

      if (response.data.success) {
        setProducts(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getProductsData();
  }, []);

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
    updateQuantity,
    getCartAmount,
    navigate,
    backendUrl,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
