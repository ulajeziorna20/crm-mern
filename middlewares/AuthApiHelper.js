const jwt = require("jsonwebtoken");
 
module.exports = (req, res, next) => {
  const token = req.header("Authorization");
  try {
    if (!token) {
      return res.status(403).json({ message: "Access denied" });
    }
 
    const decoded = jwt.verify(token, 'authpick');
    req.user = decoded;
    next();
  } catch {
    res.status(400).json({ message: "Invalid token" });
  }
};