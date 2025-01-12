
const express=require("express")
const router=express.Router()
const titleController=require("../Controllers/titleController")

router.post('/',titleController.createNewTitle)

router.get('/getAllTitles/:id',titleController.getAllTitles)

router.get('/getTitleById/:id',titleController.getTitleById)


router.delete('/:id',titleController.deleteTitle)

module.exports=router