import userModel from "../models/userModel.js";

//Shto produkte ne user cart
const addToCart = async (req, res) => {
  try {
    const { userId, itemId, size } = req.body;

    //Merr shporten aktuale nga databaza
    const userData = await userModel.findById(userId);
    let cartData = await userData.cartData;

    // nese produkti ekziston ne shporte
    if (cartData[itemId]) {
      // Nese ekziston edhe madhesia
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1; // rrit sasine
      } else {
        cartData[itemId][size] = 1; // krijo madhesine me sasi 1
      }
    } else {
      cartData[itemId] = {};
      //nese produkti nuk ekziston, krijoje
      cartData[itemId][size] = 1;
    }

    await userModel.findByIdAndUpdate(userId, { cartData });

    res.json({ success: true, message: "U shtua në shportë" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//Perditeso user cart
const updateCart = async (req, res) => {
  try {
    const { userId, itemId, size, quantity } = req.body;
    //Merr shporten e userit
    const userData = await userModel.findById(userId);
    let cartData = await userData.cartData;

    cartData[itemId][size] = quantity; //perditson sasine e produktit ne te dhanunat e shportes

    //ruaj ne db
    await userModel.findByIdAndUpdate(userId, { cartData });

    res.json({ success: true, message: "Shporta u përditësua" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//Merr te dhanunat e shportes se perdoruesit
const getUserCart = async (req, res) => {
  try {
    const { userId } = req.body;

    //merr userin me Id dhe merr shporten
    const userData = await userModel.findById(userId);
    let cartData = await userData.cartData;

    res.json({ success: true, cartData });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export { addToCart, updateCart, getUserCart };
