import express from 'express';
import Bookings from '../models/booking.js';

const router = express.Router()
router.post('/bookings',  async(req, res)=>{
    const {clientId, providerId, service, status, bookingdate} = req.body

    try {
        const newBooking = new Bookings({
            client: clientId,
            provider: providerId,
            service: service,
            bookingStatus: status || 'pending',
            date:  bookingdate
        })
        await newBooking.save()
        return res.status(200).json({
            success: true, 
            booking: newBooking
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
