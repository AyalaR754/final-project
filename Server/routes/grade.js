const express=require("express")
const router=express.Router()
const gradeController=require("../Controllers/gradeController")



router.post('/',gradeController.creatNewGrade)

router.get('/:id',gradeController.getGradeById)

router.get('/',gradeController.getAllGrade)

router.put('/',gradeController.updateGrade)

router.delete('/:id',gradeController.deleteGrade)


module.exports=router