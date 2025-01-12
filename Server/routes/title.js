
const express=require("express")
const router=express.Router()
const titleController=require("../Controllers/titleController")

router.post('/',titleController.createNewTitle)

router.get('/',titleController.getAllTitles)

router.get('/:id',titleController.getTitleById)


router.delete('/:id',titleController.deleteTitle)

module.exports=router