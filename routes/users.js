const express = require("express");
const router = express.Router();
const usersData = require("./test.js");

router.get("/", usersData);
router.post("/", (req, res) => {
  return res.send("recived data from post request");
});
router.patch("/", (req, res) => {
  return res.send("recived data from post request");
});
router.delete("/", (req, res) => {
  return res.send("recived data from post request");
});
module.exports = router;
