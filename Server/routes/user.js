const express=require("express")
const router=express.Router()
const userController=require("../Controllers/userController")
const verifyJWT=require("../middleware/verifyJWT")


router.post('/register',userController.register)

router.post('/login',userController.login)

router.get('/',verifyJWT,userController.getAllUser)

router.put('/',userController.updateUser)



module.exports=router