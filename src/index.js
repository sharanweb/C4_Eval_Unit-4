const express = require("express");
const app = express();
app.use(express.json());

const {register, login}= require("./controllers/auth.controller");
const todoController = require("./controllers/todo.controller");

app.use("/register", register);
app.use("/login",login);
app.use("/todos", todoController);




module.exports = app;