/* eslint-disable no-undef */
import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user.js'
import dotenv from 'dotenv'

dotenv.config()
const router = express.Router()

router.post('/login',  async (req, res) => {
    const {name, email, password} = req.body
    if(!name || !email || !password) {
        return res.status(400).json({
            success: false,
            message: "Please Enter all fields"
        })
    }
    const user = await User.findOne({email})

    try {
        if(!user){
            return res.status(404).json({
                success: false,
                message: "No User Found"
            })
        }
        const isMatch =  await bcrypt.compare(password, user.password)
        if(!isMatch){
            return res.status(404).json({
                success: false,
                message: "Wrong Password"
            })
        }
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET_KEY, {expiresIn : "1h"})
        return res.status(200).json({
            success: true,
            message:"Successful",
            user:{name: user.name},
            token
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
})

export default router