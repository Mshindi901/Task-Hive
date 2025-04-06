import express from 'express';
import User from '../models/user.js';

const router = express.Router()

router.get('/account/:id', async (req, res) => {
    const {id} = req.params

    try {
        const Users = await User.findById(id)
        if(Users){
            return res.status(201).json({
                success: true,
                Users
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

export default router;