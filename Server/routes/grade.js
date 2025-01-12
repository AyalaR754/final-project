const express=require("express")
const router=express.Router()
const gradeController=require("../Controllers/gradeController")
const verifyJWT=require("../middleware/verifyJWT")



router.post('/',verifyJWT,gradeController.creatNewGrade)

router.get('/:id',gradeController.getGradeById)

router.get('/',gradeController.getAllGrade)

router.put('/',verifyJWT,gradeController.updateGrade)

router.delete('/:id',verifyJWT,gradeController.deleteGrade)


module.exports=router