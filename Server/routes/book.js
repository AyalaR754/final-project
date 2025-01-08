
const express=require("express")
const router=express.Router()
const bookController=require("../Controllers/bookController")

router.post('/',bookController.createNewBook)

router.get('/',bookController.getAllBooks)

router.get('/:id',bookController.getBookById)

router.put('/',bookController.updateBook)

router.delete('/:id',bookController.deleteBook)

router.get('/:id',bookController.getAllBooksByGrade)


module.exports=router
