
const express=require("express")
const router=express.Router()
const titleController=require("../Controllers/titleController")
const verifyJWT=require("../middleware/verifyJWT")




router.post('/',verifyJWT,titleController.createNewTitle)

router.get('/getAllTitles/:id',titleController.getAllTitles)

router.get('/getTitleById/:id',titleController.getTitleById)

router.delete('/:id',verifyJWT,titleController.deleteTitle)


module.exports=router
