import { UserModel } from "../models/user-model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const createUser = async (req, res) => {
  try {
    const body = req.body;

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const { name, age, email, password } = req.body;
    await UserModel.create({
      name: body.name,
      age: 11,
      email: body.email,
      password: hashedPassword,
    });
    res.json({ message: "success" });
  } catch (err) {
    res.status(500).json({ message: "error" });
  }
};

export const getAllUsers = async (req, res) => {
  const body = req.body;

  const result = await UserModel.find();
  res.json({ data: result });
};

// login
export const login = async (req, res) => {
  const body = req.body;
  if (body.email === undefined) {
    res.status(403).json({ messege: "E-mail required" });
    return;
  }
  if (body.password === undefined) {
    res.status(403).json({ messege: "Password required" });
    return;
  }
  const oneUser = await UserModel.findOne({ email: body.email });
  if (!oneUser) {
    res.status(405).json({ message: "User not found" });
  } else {
    if (await bcrypt.compare(body.password, oneUser.password)) {
      const token = jwt.sign(
        { user_id: oneUser._id, email: oneUser.email },
        "Mykey",
        {
          expiresIn: "2d",
        }
      );
      res.status(200).json({ token });
      return;
    } else {
      res.status(405).json({ message: "Password not match" });
      return;
    }
  }
};

export const getOneUser = async (req, res) => {
  const { user_id } = req.user;
  const oneUser = await UserModel.findById(user_id);
  res.json({ data: oneUser });
};
