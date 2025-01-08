const { kMaxLength } = require("buffer")
const mongoose = require("mongoose")


const titleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        enum: ['Book', 'Exams','Exercises','Disk']
    },
 
    book: {
        type:mongoose.Schema.Types.ObjectId,
        required: true,
        ref:"Book"
    }
}, {
    timestamps: true
})


module.exports = mongoose.model("Title", titleSchema)