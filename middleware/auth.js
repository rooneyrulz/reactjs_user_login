import { verify } from "jsonwebtoken";
import config from "config";

export default async (req, res, next) => {
  const token = await req.header("x-auth-token");

  if (!token) {
    return res.status(401).send("No token, Access denied!");
  }

  try {
    const decoded = await verify(token, config.get("JWT_KEY"));

    if (!decoded) {
      return res.status(401).send("Can not verify the token, Access denied!");
    }

    req.user = decoded;
    next();
  } catch (error) {
    console.log(error.message);
    return res.status(500).send("Invalid Signature!");
  }
};
