const express = require("express");
const router = express.Router();
const Todo = require("../models/todo.model");
const authentcate = require("../middlewares/authenticate")

//GET /todos endpoint that returns all todos of the logged in user
router.get("",authenticate, async(req,res)=>{
    try {
        const todos = await Todo.find().lean().exec();
        return res.status(200).send({todos:todos});
    } catch (error) {
        return res.status(401).send({error:error.message});
    }
});

//POST /todos endpoint for the logged in user to create a todo
router.post("",authenticate, async(req,res)=>{
    try {
        const todos = await Todo.create(req.body);
        return res.status(200).send({todos:todos});
    } catch (error) {
        return res.status(401).send({error:error.message});
    }
});

//GET /todos/:id endpoint where if the todo user is same as logged in user then
router.get("/:id",authenticate, async(req,res)=>{
    try {
        const todos = await Todo.findById(req.params.id).lean().exec();
        return res.status(200).send({todos:todos});
    } catch (error) {
        return res.status(401).send({error:error.message});
    }
});

//PATCH /todos/:id endpoint where if the todo user is the same as logged in user

router.patch("/:id",authenticate,async(req,res)=>{
    try {
        const todos = await Todo.findByIdAndUpdate(req.params.id, req.body,{new:true});
        return res.status(200).send({todos:todos});
    } catch (error) {
        return res.status(401).send({error:error.message});
    }
});

//delete
router.delete("/:id",authenticate,async(req,res)=>{
    try {
        const todos = await Todo.findByIdAndDelete(req.params.id, req.body);
        return res.status(200).send({todos:todos});
    } catch (error) {
        return res.status(401).send({error:error.message});
    }
});

module.exports = router;