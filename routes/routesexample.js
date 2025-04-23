

const express = require("express");
const todosRoute = require("./todos");
const commentRoute = require("./comments");

const app = express();

app.use(express.json());

app.use("/todos", todosRoute);
app.use("/comments", commentRoute);

app.listen(7000, () => {
    console.log("Server started on port 7000");
});
