// backend/middlewares/auth.js
import jwt from "jsonwebtoken";

export const isAuthenticatedUser = (req, res, next) => {
  const { token } = req.cookies || req.headers;

  if (!token) {
    return res.status(401).json({ success: false, message: "Please login to access this resource" });
  }

  try {
    const decodedData = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decodedData; // will contain user id and other payload data
    next();
  } catch (error) {
    return res.status(401).json({ success: false, message: "Invalid or expired token" });
  }
};
