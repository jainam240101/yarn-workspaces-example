/** @format */

import jwt from "jsonwebtoken";

export const createToken = (userId) => {
  var token = jwt.sign({ userId: userId }, "secret");
  return token;
};

export const validateUser = (req, res, next) => {
  const token = req.headers["authorization"];
  if (token) {
    jwt.verify(token, "secret", function (err, decoded) {
      if (err) {
        console.log("verify -- ", err);
        return res.status(401).json({ error: true, message: err.message });
      }
      req.userId = decoded.userId;
      next();
    });
  } else {
    return res.status(401).send("Unauthorized");
  }
};
