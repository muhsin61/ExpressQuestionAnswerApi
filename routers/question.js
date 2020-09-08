const express = require("express");

const router = express.Router();
//api/question
router.get("/",(req,res)=>{
    res.send("Question home page")
})
router.get("/delete",(req,res)=>{
    res.send("Question Delete page")
})


module.exports = router;