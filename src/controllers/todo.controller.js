const express = require("express");
const router = express.Router();
const Todo = require("../models/todo.model");

//GET /todos endpoint that returns all todos of the logged in user
router.get("", async(req,res)=>{
    try {
        const todos = await Todo.find().lean().exec();
        return res.status(200).send({todos:todos});
    } catch (error) {
        return res.status(400).send({error:error.message});
    }
});

//POST /todos endpoint for the logged in user to create a todo
router.post("", async(req,res)=>{
    try {
        const todos = await Todo.create(req.body);
        return res.status(200).send({todos:todos});
    } catch (error) {
        return res.status(400).send({error:error.message});
    }
});

//GET /todos/:id endpoint where if the todo user is same as logged in user then
router.get("/:id", async(req,res)=>{
    try {
        const todos = await Todo.findById(req.params.id).lean().exec();
        return res.status(200).send({todos:todos});
    } catch (error) {
        return res.status(400).send({error:error.message});
    }
});

//PATCH /todos/:id endpoint where if the todo user is the same as logged in user

