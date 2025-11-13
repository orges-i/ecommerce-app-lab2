import userModel from "../models/userModel.js";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

//ky file eshte controller ne te cilin do te implementohen funksionalitetet per menaxhimin e userave

//Route for user login
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json({
        success: false,
        message: "Përdoruesi nuk ekziston!",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      const token = createToken(user._id);
      res.json({
        success: true,
        token,
      });
    } else {
      res.json({ success: false, message: "Fjalëkalim i gabuar!" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Route for user registration
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body; //marrja e te dhenave nga body e requestit prej frontend

    // checking if user already exists/ shiko nese perdoruesi ekziston

    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({
        success: false,
        message: "Perdoruesi me kete email ekziston!",
      });
    }

    //validimi email format & password strength duke perdor validator library

    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Email i pavlefshëm!" });
    }
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Ju lutem vendosni një fjalëkalim të fortë",
      });
    }

    //hashing password me bcryptjs

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
    });

    const user = await newUser.save();

    const token = createToken(user._id);
    res.json({
      success: true,
      message: "Regjistrimi u krye me sukses",
      data: {
        name: user.name,
        email: user.email,
        token: token,
      },
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Route for admin login
const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token = jwt.sign(email + password, process.env.JWT_SECRET);
      res.json({ success: true, token });
    } else {
      res.json({
        success: false,
        message: "Të dhëna të pavlefshme !",
      });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export { loginUser, registerUser, adminLogin };
