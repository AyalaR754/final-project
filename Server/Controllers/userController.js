const User = require("../models/User")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')





//get all user

const getAllUser = async (req, res) => {

    const users = await User.find().lean()
    if (!users?.length)
        return res.status(400).json({ message: 'No users found' })
    res.json(users)
}



//update

const updateUser = async (req, res) => {
    const { _id, username, name, phone, email } = req.body
    const user = await User.findById(_id)
    if (!user)
        return res.status(400).json({ message: 'No user found' })
    user.name = name
    user.username = username
    user.email = email
    user.phone = phone
    const updateUser = await user.save()
    if(!updateUser)
        {return res.status(201).send("The update failed")}
    res.json(updateUser)
}



//register

const register = async (req, res) => {
    
    const { username, password, name, email, phone } = req.body
    
    if (!name || !username || !password) {
        return res.status(400).json({ message: 'All fields are required' })
    }
    const duplicate = await User.findOne({ username: username }).lean()
    if (duplicate) {
        return res.status(409).json({ message: "Duplicate username" })
    }
    const hashedpwd = await bcrypt.hash(password, 10)
    const userobject = { name, email, username, phone, password: hashedpwd }

    const user = await User.create(userobject)
    if (user) {
        return res.status(201).json({
            message: `New user ${user.username} created` })
    } else {
        return res.status(400).json({ message: 'Invalid user received' })
    }
}






//login
const login = async (req, res) => {
    const { username, password } = req.body
    if (!username || !password)
        return res.status(400).json({ message: 'All fields are required' })
    const foundUser = await User.findOne({ username }).lean()
    console.log(foundUser)
    if (!foundUser) {

        return res.status(401).json({ message: 'Cant connect' })
    }

    const Match = await bcrypt.compare(password, foundUser.password)
    if (!Match) return res.status(401).json({ message: 'Cant connect' })
        
    const NewUser = {
        _id: foundUser._id,
        name: foundUser.name,
        username: foundUser.username,
        email: foundUser.email,
        phone: foundUser.phone,
        roles:foundUser.roles
    }


    if (NewUser.roles==="user")
       {
        

        const accessTokenUser = jwt.sign(NewUser, process.env.ACCESS_TOKEN_SECRET)
        res.json({ accessTokenUser: accessTokenUser })

       }
       else
       {
       const accessTokenMannage = jwt.sign(NewUser, process.env.ACCESS_TOKEN_SECRET)
       res.json({ accessTokenMannage: accessTokenMannage })}
}



module.exports = {register,login,getAllUser,updateUser}