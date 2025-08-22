import { createContext } from "react";
import { products } from "../assets/assets";    

export const ShopContext = createContext();

    //ketu kemi perdor context API pepr me kriju dhe nda te dhena globale ne te gjithe Web

const ShopContextProvider = (props) => {

    const currency = '€'; // Mundesh me ndrru valuten qysh te dush
    const delivery_fee = 10;

    

    const value = {
        products , currency, delivery_fee
    }

return (
    <ShopContext.Provider value={value}>

        {props.children}

    </ShopContext.Provider>
)

}

export default ShopContextProvider;