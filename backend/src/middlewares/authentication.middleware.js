import jwt from "jsonwebtoken";
import dev from "../../config/config.js";

const authentication = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({
        success: false,
        error: "Unauthorized user!",
      });
    }
    const decoded = await jwt.verify(token, dev.tokenKey);
    if (!decoded) {
      return res.status(401).json({
        success: false,
        error: "Invalid token!",
      });
    }
    req.id = decoded.userId;
    next();
  } catch (error) {
    res.status(401).json({
      success: false,
      error: error?.message,
    });
  }
};

export default authentication;
