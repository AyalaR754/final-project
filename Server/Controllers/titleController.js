const Title = require("../models/Title")


const createNewTitle= async (req, res) => {
    const { name, book } = req.body

    if (!book) { // Confirm data
        return res.status(400).json({ message: 'filed product is required' })
    }
    if (!name) {
        return res.status(400).send("name is required")
    }
    const existTitle = await Title.findOne({ name: name ,book:book});
    if (existTitle) {
        return res.status(400).send("invalid name")
    }
    const title = await Title.create({ name, book })

    if (!title) {
        return res.status(201).send("invalid book")
    }
    return res.status(201).json({ message: 'you add title to your book' })
}

//הנוכחי book  להביא את כל הכותרות ל 
const getAllTitels = async (req, res) => {
    const id = req.book._id
    const allTitels = await Title.find({ book: id }).populate("book")
    // If no titles
    if (!allTitels?.length) {
        return res.status(400).json({ message: 'No titles found' })
    }
    res.json(allTitels)
}
//titlebybook


const getTitleById = async (req, res) => {
    const { id } = req.params
    const title = await Title.findById(id).lean()
    if (!title) {
        return res.status(400).json({ message: 'No title found' })
    }
    res.json(title)
}



const deleteTitle = async (req, res) => {
    const { id } = req.params
    const title = await Title.findById(id).exec()
    if (!title) {
        return res.status(400).json({ message: 'title not found' })
    }
    // const res = getAllFiles()
    // if (res?.length > 0) {
    //     res.forEach(ele => { deleteTitle(ele._id) })
    // }
    const result = await Title.deleteOne()
    const titles = await Title.find().lean().populate("Book")
    if (!titles?.length) {
        return res.status(400).json({ message: 'No titles found' })
    }
    res.json(titles)
}





module.exports = { createNewTitle, getAllTitels, getTitleById, deleteTitle }