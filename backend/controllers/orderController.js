import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from "stripe";

//variablat globale
const currency = "eur";
const deliveryCharge = 10;

// inicializimi i menyres se pageses

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

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
    // Pastro shporten e userit
    await userModel.findByIdAndUpdate(userId, { cartData: {} }); // te dhanunat e shportes behen reset pasi te ruhen ne db

    res.json({ success: true, message: "Porosia u vendos" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Vendos porosi me Stripe metoda
const placeOrderStripe = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;
    const { origin } = req.headers;
    const orderData = {
      userId,
      items,
      address,
      amount,
      paymentMethod: "Stripe",
      payment: false,
      date: Date.now(),
    };

    const newOrder = new orderModel(orderData);
    await newOrder.save();

    const line_items = items.map((item) => ({
      price_data: {
        currency: currency,
        product_data: {
          name: item.name,
        },
        unit_amount: item.price * 100,
      },
      quantity: item.quantity,
    }));

    line_items.push({
      price_data: {
        currency: currency,
        product_data: {
          name: "Kosto e Dërgesës",
        },
        unit_amount: deliveryCharge * 100,
      },
      quantity: 1,
    });

    const session = await stripe.checkout.sessions.create({
      success_url: `${origin}/verify?success=true&orderId=${newOrder.id}`,
      cancel_url: `${origin}/verify?success=false&orderId=${newOrder.id}`,
      line_items,
      mode: "payment",
    });
    res.json({ success: true, session_url: session.url });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Verifiko Stripe
const verifyStripe = async (req, res) => {
  const { orderId, success, userId } = req.body;
  try {
    if (success === "true") {
      await orderModel.findByIdAndUpdate(orderId, { payment: true });
      await userModel.findByIdAndUpdate(userId, { cartData: {} });
      res.json({ success: true });
    } else {
      await orderModel.findByIdAndDelete(orderId);
      res.json({ success: false });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

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
  verifyStripe,
  placeOrder,
  placeOrderStripe,
  allOrders,
  userOrders,
  updateStatus,
};
