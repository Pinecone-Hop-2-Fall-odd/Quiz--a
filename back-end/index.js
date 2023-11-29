const express = require("express");
const cors = require("cors")
const app = express();
app.use(express.json());
app.use(cors());

const users = [
  { name: "Bataa", id: "12" },
  { name: "Dulmaa", id: "14" },
  { name: "Boldoo", id: "23" },
  { name: "Amraa", id: "16" },
];

app.post("/user", (req, res) => {
  const { name, id } = req.body;
  users.push({ name, id })
  res.json(users);
});

app.get("/users", (req, res) => {
    res.json({data : users});
})

app.listen(3000);