import express from 'express';
import User from '../models/user.js';

const router = express.Router()

router.put('/accounts/update/:id', async (req, res) => {
    const {id} = req.params
    const updateData = req.body
    try {
        const userAccount = await User.findByIdAndUpdate(id, updateData, {new: true, runValidators: true})
        if(userAccount){
            return res.status(200).json({
                success: true,
                user: userAccount
            })
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
})

export default router