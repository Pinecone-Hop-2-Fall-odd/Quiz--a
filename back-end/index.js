const express = require("express");
const app = express();
app.use(express.json());

const users = [
  { name: "Bataa", id: "12" },
  { name: "Dulmaa", id: "14" },
  { name: "Boldoo", id: "23" },
  { name: "Amraa", id: "16" },
];

app.post("/users", (req, res) => {
  const { name, id } = req.body;
  users.push({ name, id })
  res.json(users);
});

app.listen(3000);