import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

// Vendos porosi me Cash on delivery / Paguaj me kesh metode

const placeOrder = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;

    const orderData = {
      userId,
      items,
      address,
      amount,
      paymentMethod: "Kesh",
      payment: false,
      date: Date.now(),
    };

    const newOrder = new orderModel(orderData);
    await newOrder.save();

    await userModel.findByIdAndUpdate(userId, { cartData: {} }); // te dhanunat e shportes behen reset pasi te ruhen ne db

    res.json({ success: true, message: "Porosia u vendos" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Vendos porosi me Stripe metoda
const placeOrderStripe = async (req, res) => {};

//Vendos porosi me razor pay metoda
const placeOrderRazorpay = async (req, res) => {};

// te dhenat e Te gjitha e porosive per Panelin e adminit
const allOrders = async (req, res) => {
  try {
    // kthen krejt porosite pa filtrim
    const orders = await orderModel.find({});
    res.json({ success: true, orders });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Te dhenat e porosive te user per Frontend
const userOrders = async (req, res) => {
  try {
    const { userId } = req.body;

    const orders = await orderModel.find({ userId });
    res.json({ success: true, orders });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Perditso statusin e porosise prej Panelit te adminit // vetem admini mundet
//Admini dergon orderId + statusin e ri
const updateStatus = async (req, res) => {
  try {
    const { orderId, status } = req.body; // Merr te dhenat nga frontend

    // Gjej porosine sipas orderId dhe ndrysho fushen "status"

    await orderModel.findByIdAndUpdate(orderId, { status });
    res.json({ success: true, message: "Statusi i porosisë u përditësua" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export {
  placeOrder,
  placeOrderStripe,
  placeOrderRazorpay,
  allOrders,
  userOrders,
  updateStatus,
};
