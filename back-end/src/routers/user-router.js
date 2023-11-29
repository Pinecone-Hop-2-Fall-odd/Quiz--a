import express from "express";
import {
  craeteUser,
  getAllUsers,
  login,
} from "../controllers/user-controlllers";

export const userRouter = express.Router();

userRouter.post("/user", craeteUser);
userRouter.get("/users", getAllUsers);
userRouter.post("/login", login);
