const express = require("express");
const app = express();
app.use(express.json());

const users = [
  { name: "Bataa", id: "12" },
  { name: "Dulmaa", id: "14" },
  { name: "Boldoo", id: "23" },
  { name: "Amraa", id: "16" },
];

app.get("/users", (req, res) => {
  const { id } = req.params;
  res.json(users);
});

app.get("/user/:name", (req, res) => {
  const { name } = req.params;
  const user = users.filter((user) => user.name == name);

  res.json(user);
});
app.post("/users", (req, res) => {
  const { name, id } = req.body;
  users.push({ name, id })
  res.json(users);
});

app.listen(3000);