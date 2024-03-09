import { RequestHandler, Request } from "express";
import { auth } from "../services/auth-service";
import { UserModel } from "../model/user-signup-model";

const extractToken = (req: Request) => {
  const authHeader = req.header("Authorization");

  if (
    authHeader &&
    authHeader.length > 7 &&
    authHeader.toLowerCase().startsWith("bearer ")
  ) {
    return authHeader.substring(7);
  }
console.log("token is missing in Authorization header", 400);
};

const isAdmin: RequestHandler = async (req, res, next) => {
  const token = extractToken(req);
  const { email } = auth.verifyJWT(token);

  const user = await UserModel.findOne({ email });

  const isAdmin = user?.isAdmin;
  if (isAdmin) {
    return next();
  }

  return res.status(401).json({ message: "Must be admin" });
};

export { isAdmin, extractToken };