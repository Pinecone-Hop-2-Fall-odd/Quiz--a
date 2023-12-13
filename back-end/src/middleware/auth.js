import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];

  if (!token) {
    return res.status(403).json({ succes: false, message: "token oruulnuu" });
  }

  try {
    console.log(token);
    const decoded = jwt.verify(token, "Mykey");
    req.user = decoded;
  } catch (err) {
    // console.log(err);
    return res.status(401).json({ succes: false, message: "token buruu bn" });
  }

  return next();
};
