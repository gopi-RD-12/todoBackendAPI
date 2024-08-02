const userController=require("../controller/userController");
const express=require("express");
const router=express.Router();
router.post("/register",userController.userRegisteration)
router.post("/login",userController.userLogin)
router.get("/users",userController.getAllUsers)
router.get("/users/:userId",userController.getUser)

module.exports=router;