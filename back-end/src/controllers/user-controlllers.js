const users = [
  { email: "amraa@gmail.com", password: "12345678" },
  { email: "bataa@gmail.com", password: "12345678" },
  { email: "dorjoo@gmail.com", password: "12345678" },
  { email: "dulmaa@gmail.com", password: "12345678" },
];

export const craeteUser = (req, res) => {
  const { name, id } = req.body;
  users.push({ name, id });
  res.json(users);
};

export const getAllUsers = (req, res) => {
  res.json({ data: users });
};

// login
export const login = (req, res) => {
  const body = req.body;
  if (body.email === undefined) {
    res.status(403).json({ messege: "E-mail required" });
    return;
  }
  if (body.password === undefined) {
    res.status(403).json({ messege: "Password required" });
    return;
  }
  const filteredUser = users.filter((cur) => cur.email === body.email);
  if (filteredUser.length === 0) {
    res.status(405).json({ message: "User not found" });
  } else {
    const user = filteredUser[0];

    if (user.password === body.password) {
      res.status(200).json({ user: user });
      return;
    } else {
      res.status(405).json({ message: "Password not match" });
      return;
    }
  }
};
