import express from 'express'
import ServiceProfile from '../models/service-profile.js'

const router = express.Router();

router.put('profile/:id', async (req, res) => {
    const {id} = req.params
    const updatedProfileInfo = req.body

    try {
        const updatedProfileData = await ServiceProfile.findByIdAndUpdate(id, updatedProfileInfo, {new: true, runValidators: true})
        if(updatedProfileData){
            return res.status(200).json({
                success: true,
                profile: updatedProfileData
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