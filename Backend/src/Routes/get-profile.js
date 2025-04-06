import express from 'express';
import ServiceProfile from '../models/service-profile.js';

const router = express.Router()

router.get('profile/:id',  async(req, res) => {
    const {id} = req.params

    try {
        const ProfilePage = await ServiceProfile.findById(id)
            .populate({
                path: 'rate',
                select: 'ratings review name'
            })
        if(!ProfilePage){
            return res.status(404).json({
                success: false,
                message: "Profile Info Not found"
            })
        }
        return res.status(201).json({
            success: true,
            ProfilePage
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