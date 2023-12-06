import express from "express";
import {
  createUser,
  getAllUsers,
  login,
  getOneUser
} from "../controllers/user-controlllers.js";

export const userRouter = express.Router();

userRouter.get("/users", getAllUsers);
userRouter.get("/user/:id", getOneUser);
userRouter.post("/user", createUser);
userRouter.post("/login", login);
// userRouter.put
// userRouter.delete
// CRUD - Create , Read , Update , Delete
