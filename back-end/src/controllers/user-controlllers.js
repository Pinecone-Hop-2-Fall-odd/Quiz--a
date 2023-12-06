import { UserModel } from "../models/user-model.js";

// const users = [
//   { email: "amraa@gmail.com", password: "12345678" },
//   { email: "bataa@gmail.com", password: "12345678" },
//   { email: "dorjoo@gmail.com", password: "12345678" },
//   { email: "dulmaa@gmail.com", password: "12345678" },
// ];

export const createUser = async (req, res) => {
  const { name, age, email, password } = req.body;
  await UserModel.create({ name, age, email, password });
  res.json({ message: "success" });
};

export const getAllUsers = async (req, res) => {
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
    if (oneUser.password == body.password) {
      res.status(200).json({ user: oneUser });
      return;
    } else {
      res.status(405).json({ message: "Password not match" });
      return;
    }
  }
};

export const getOneUser = async (req, res) => {
  const {id} = req.params
  console.log(id)
  const oneUser =  await UserModel.findById(id);
  console.log(oneUser)
  res.json({data: oneUser });
};
