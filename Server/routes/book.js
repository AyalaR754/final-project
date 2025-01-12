
const express=require("express")
const router=express.Router()
const bookController=require("../Controllers/bookController")
const verifyJWT=require("../middleware/verifyJWT")

router.post('/',verifyJWT,bookController.createNewBook)

router.get('/',bookController.getAllBooks)

router.get('/:id',bookController.getBookById)

router.put('/',verifyJWT,bookController.updateBook)

router.delete('/:id',verifyJWT,bookController.deleteBook)

router.get('/:id',bookController.getAllBooksByGrade)


module.exports=router
