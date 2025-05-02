const express = require("express");
const users = require("./MOCK_DATA.json");
const fs = require("fs");
const app = express();

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  return res.json(users);
});

app.get("/users", (req, res) => {
  const html = `
  <ul>
  ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
  </ul>`
  res.send(html);
});

app
  .route("/api/users")
  .get((req, res) => {
    const id = Number(req.params.id);
    let user = users.find((user) => user.id === id);
    return res.json(user);
  })
  .post((req, res) => {
    const body = req.body;
    users.push({ ...body, id: users.length + 1 });
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
      return res.json({ status: "pending", id: users.length });
    });
  })

  app.delete("/api/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const updatedUsers = users.filter((user) => user.id !== id);
    if (updatedUsers.length === users.length) {
      return res.status(404).json({ message: "User not found" });
    }
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(updatedUsers, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ status: "error", message: "Failed to delete user" });
      }
      return res.json({ status: "success", message: "User deleted" });
    });
  });

app.listen(8000, () => {
  console.log("Server Started");
});
