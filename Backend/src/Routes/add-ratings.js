import express from 'express';
import Ratings from '../models/ratings.js';

const router = express.Router()

router.post('/ratings',  async(req, res) => {
    const {name, review, ratings} = req.body

    if(!name || !ratings){
        return res.status(400).json({
            success: false,
            message: "Please Enter all Fields"
        })
    }

    try {
        const newRating = new Ratings({
           client: name,
            review, 
            ratings
        })
        await newRating.save()
        return res.status(200).json({
            success: true,
            message: "Successful"
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