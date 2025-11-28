import express from "express";
import {
  addToCart,
  getUserCart,
  updateCart,
} from "../controllers/cartController.js";
import authUser from "../middleware/auth.js";

const cartRouter = express.Router();

//cart routes
cartRouter.post("/get", authUser, getUserCart); // merr shporten e usesr
cartRouter.post("/add", authUser, addToCart); // shto produkt
cartRouter.post("/update", authUser, updateCart); // perditeson sasi / update

export default cartRouter;
