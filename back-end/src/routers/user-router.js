import express from "express";
import {
  createUser,
  getAllUsers,
  login,
  getOneUser,
} from "../controllers/user-controlllers.js";
import { verifyToken } from "../middleware/auth.js";

export const userRouter = express.Router();

userRouter.get("/users", verifyToken, getAllUsers);
userRouter.get("/user", verifyToken , getOneUser);
userRouter.post("/user", createUser);
userRouter.post("/login", login);
// userRouter.put
// userRouter.delete
// CRUD - Create , Read , Update , Delete
