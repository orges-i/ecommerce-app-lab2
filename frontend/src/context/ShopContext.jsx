import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const ShopContext = createContext();

//ketu kemi perdor context API per me kriju dhe nda te dhena globale ne te gjithe Web

const ShopContextProvider = (props) => {
  const currency = "€"; // Mundesh me ndrru valuten qysh te dush
  const delivery_fee = 10;
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const [products, setProducts] = useState([]);
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  //shton produkt ne shporte ne frontend dhe backend
  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error("Ju lutem zgjidhni nje madhesi."); //Notifikim gabimi nese nuk eshte zgjedhur size
      return;
    }

    //kopjo shporten aktuale
    let cartData = structuredClone(cartItems);

    //logjika e shtimit te produktit
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

    //neqoftese user eshte i kyqur dergo ne databaze
    if (token) {
      try {
        await axios.post(
          backendUrl + "/api/cart/add",
          { itemId, size },
          { headers: { token } }
        );
        toast.success("Produkti u shtua ne shporte");
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
    }
    if (!token) {
      toast.success("Produkti u shtua ne shporte");
    }
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

  // ndryshon sasine e produktit te shportes ne front dhe backend
  const updateQuantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);

    cartData[itemId][size] = quantity;

    setCartItems(cartData); // Update state me te dhena te reja

    if (token) {
      try {
        await axios.post(
          backendUrl + "/api/cart/update",
          {
            itemId,
            size,
            quantity,
          },
          { headers: { token } }
        );
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
    }
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

  //merr shporten e userit nga databaza pas login ose refresh
  const getUserCart = async (token) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/cart/get",
        {},
        { headers: { token } }
      );

      if (response.data.success) {
        setCartItems(response.data.cartData);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getProductsData();
  }, []);

  useEffect(() => {
    if (!token && localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
      getUserCart(localStorage.getItem("token"));
    }
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
    setToken,
    token,
    setCartItems,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
