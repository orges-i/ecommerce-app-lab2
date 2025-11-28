import jwt from "jsonwebtoken";

//konverton token ne userId dhe e vendos te req.body
const authUser = async (req, res, next) => {
  const { token } = req.headers;
  if (!token) {
    return res.json({
      success: false,
      message: "Nuk jeni të autorizuar, provo përsëri",
    });
  }

  try {
    //deshifron tokenin
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    //vendos userId te req.body
    req.body.userId = token_decode.id;
    next(); // vazhdon te next function
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export default authUser;
