import express from 'express';
import Bookings from '../models/booking.js';

const router = express.Router()

router.get('/bookings/:id', async(req, res)=>{
    const {id} = req.params;

    try {
        const bookings = await Bookings.findById(id)
            .populate({
                path: 'client',
                select: 'name profilePicture'
            })
            .populate({
                path: 'provider',
                select: 'name'
            })
            .populate({
                path: 'service',
                select: 'service'
            })
        if(!bookings){
            return res.status(404).json({
                success: false,
                message:"No bookings!"
            })
        }
        return res.status(200).json({
            success: true,
            bookings: bookings
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