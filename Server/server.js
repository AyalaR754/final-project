require("dotenv").config()
const express=require("express")
const cors=require("cors")
const corsOptions=require("./config/corsOptions")
const connectDB=require("./config/dbConn.js")
const { default: mongoose } = require("mongoose")

const app=express()
const PORT=process.env.PORT||4000
connectDB()

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.static("public"))

app.use("/user",require("./routes/user.js"))
app.use("/book",require("./routes/book.js"))
app.use("/grade",require("./routes/grade.js"))
app.use("/title",require("./routes/title.js"))
app.use("/file",require("./routes/file.js"))


app.get('/',(req,res)=>{ res.send("this is the home page")})

mongoose.connection.once("open",()=>{
    console.log("succsed")
    app.listen(PORT,()=>{console.log(`server runing on port ${PORT}`)})
    }) 
mongoose.connection.on("error",(err)=>{console.log(err)})