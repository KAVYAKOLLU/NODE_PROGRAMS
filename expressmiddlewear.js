const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("first middlewear");
  next();
});

app.use((req, res, next) => {
  console.log("second  middlewear");
  next();
});

app.get("/users", (req, res) => {
  return res.send("users data");
});

app.listen(8000, () => {
  console.log("server started");
});
