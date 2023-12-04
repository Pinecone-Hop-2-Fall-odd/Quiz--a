import { UserModel } from "../models/user-model.js";

export const users = [
  {
    id: "sanoifhjsapomfp868",
    name: "bob",
    email: "email@gmail.com",
    password: "pass",
  },
];

export const getAllUsers = async (req, res) => {
  const users_data = await UserModel.find({});
  res.status(200).json({ users: users_data });
};

export const getUser = (req, res) => {
  const params = req.params;

  const filteredUser = users.filter((cur) => cur.id === params.id);

  if (filteredUser.length === 0) {
    res.status(405).json({ message: "User not found" });
  } else {
    res.status(200).json({ user: filteredUser[0] });
  }
};

export const createUser = async (req, res) => {
  const body = req.body;

  await UserModel.create({
    name: body.name,
    email: body.email,
    age: 21,
    createdOn: new Date(),
  });

  res.status(200).json({ users: users });
};
