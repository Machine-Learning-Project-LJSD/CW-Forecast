const express = require('express')
const route = express.Router()
const checkAuthentication = require("./../../middlewares/authentication/checkAuthentication")


route.get("/",checkAuthentication.auth,(req,res)=>{
    res.json({isAuthenticated:true, email:sessionStorage.getItem('user')});
})




module.exports = route