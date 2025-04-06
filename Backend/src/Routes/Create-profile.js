import express from 'express';
import ServiceProfile from '../models/service-profile.js';

const router = express.Router()

router.post('/profile', async(req, res) =>{
    const {name, Description, service, location, contact, ratings} = req.body
    if (!name || !Description || !service || !location || !contact){
        return res.status(400).json({
            success: false,
            message: "Please Fill all Fields"
        })
    }

    try {
        const newServiceProfile = new ServiceProfile({
            name,
            Description,
            service,
            location,
            contact,
            rate: ratings
        })
        await newServiceProfile.save()
        return res.status(200).json({
            success: true,
            message: "Profile Created"
        })
    } catch (error) {
       console.log(error)
       return res.status(500).json({
        success: false,
        message:"Internal Server Error"
       }) 
    }
})
export default router;