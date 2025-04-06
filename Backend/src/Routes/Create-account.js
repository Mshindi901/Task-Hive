import express from 'express'
import bcrypt from 'bcryptjs'
import User from '../models/user.js'

const router = express.Router()


router.post('/account',  async (req,res) =>{
    const {name, email, role, location, phoneNumber, profilePicture, password} = req.body

    if(!name || !email || !role || !location || !phoneNumber || !password) {
        return res.status(400).json({
            success: false,
            message: "Please Enter all Fields"
        })
    }

    try {
        const existingUser = await User.findOne({email})
        if (existingUser){
            return res.status(404).json({
                success: false,
                message: "User Already Exist!"
            })
        }
        const salt = await bcrypt.genSalt(10)
        const hashedPassword =  await bcrypt.hash(password, salt)
        const newAccount = new User({
            name,
            email,
            role,
            location,
            phoneNumber,
            profilePicture,
            password: hashedPassword
        })
        await newAccount.save()
        return res.status(200).json({
            success: true,
            message: "Account Created Successfully"
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
})

export default router;