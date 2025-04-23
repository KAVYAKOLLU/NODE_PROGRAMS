

const express = require("express");
const router = express.Router();
const filterData = require("./filterData");

router.get("/", filterData);

router.post("/", (req, res) => {
    return res.send("Received data from POST request");
});

router.patch("/", (req, res) => {
    return res.send("Received data from PATCH request");
});

router.delete("/", (req, res) => {
    return res.send("Received data from DELETE request");
});

module.exports = router;
