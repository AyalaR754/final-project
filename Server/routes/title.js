
const express=require("express")
const router=express.Router()
const titleController=require("../Controllers/titleController")
const verifyJWT=require("../middleware/verifyJWT")


<<<<<<< HEAD

router.post('/',verifyJWT,titleController.createNewTitle)

=======
>>>>>>> 8e52b0a7f7d8b7dde7722859f9e84407c7b46943
router.get('/getAllTitles/:id',titleController.getAllTitles)

router.get('/getTitleById/:id',titleController.getTitleById)

<<<<<<< HEAD
router.delete('/:id',verifyJWT,titleController.deleteTitle)
=======
router.delete('/:id',titleController.deleteTitle)
>>>>>>> 8e52b0a7f7d8b7dde7722859f9e84407c7b46943

module.exports=router