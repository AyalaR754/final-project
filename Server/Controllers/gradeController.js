const Grade = require("../models/Grade")


//creat
const creatNewGrade = async (req, res) => {
    const {   name,image } = req.body
    if (!name) {
        return res.send("required name!!").status(400)
    }
    const duplicate = await Grade.findOne({ name: name }).lean()
    if (duplicate) {
        return res.status(409).json({ message: "Duplicate Grade" })
    }
    const grade = await Grade.create({ name,image })
    if(!grade)
        {return res.status(201).send("invalid grade")}
    res.json(grade)
}

//read
const getAllGrade = async (req, res) => {

    const grades = await Grade.find().lean().sort({name:1})
    if (!grades?.length)
        return res.status(400).json({ message: 'No grades found' })
    res.json(grades)
}

//readbyid
const getGradeById = async (req, res) => {
    const { id } = req.params
    const grade = await Grade.findById(id).lean()
    if (!grade)
        return res.status(400).json({ message: 'No grade found' })
    res.json(grade)
}

//update
const updateGrade = async (req, res) => {
    const {_id,name,image } = req.body
    const grade = await Grade.findById(_id)
    if (!grade)
        return res.status(400).json({ message: 'No grade found' })
    grade.name = name
    grade.image = image

    const updateGrade = await grade.save()
    if(!updateGrade)
        {return res.status(201).send("invalid grade")}
    const grades = await Grade.find().lean()
    res.json(grades)
}

//delete
const deleteGrade = async (req, res) => {
    const { id } = req.params
    const grade = await Grade.findById(id)
    if (!grade)
        return res.status(400).json({ message: 'No grade found' })
    const result = await Grade.deleteOne()
    const grades = await Grade.find().lean()
    if (!grades?.length)
        return res.status(400).json({ message: 'No grades found' })
    res.json(grades)
   
}

module.exports = { creatNewGrade, getAllGrade, getGradeById, updateGrade, deleteGrade }