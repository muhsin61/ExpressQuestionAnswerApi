//express route olıturmak;
const express = require("express")

const router = express.Router();
//api/auth
router.get("/",(req,res)=>{
    res.send("Auth home page")
});

router.get("/register",(req,res)=>{
    res.send("Auth register page")
})

module.exports = router;
