const express = require("express");
const router = express.Router();
const User = require("../models/user.model");


router.get("", async(req,res)=>{
    try {
        const users = await User.find().lean().exec();
        return res.status(200).send({todos:users});
    } catch (error) {
        return res.status(400).send({error:error.message});
    }
});


router.post("", async(req,res)=>{
    try {
        const todos = await User.create(req.body);
        return res.status(200).send({todos:todos});
    } catch (error) {
        return res.status(400).send({error:error.message});
    }
});

module.exports = router;