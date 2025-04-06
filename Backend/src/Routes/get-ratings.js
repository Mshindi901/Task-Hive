import express from  'express'
import Ratings from '../models/ratings.js';

const router = express.Router();
router.get('ratings/:id', async (req, res) => {
    const {id} = req.params

    try {
        const ratingsPage = await Ratings.findById(id)
            .populate({
                path: 'client',
                select: 'name'
            })
        if(!ratingsPage){
            return res.status(404).json({
                success: false,
                message: "Profile Info Not found"
            })
        }
        return res.status(201).json({
            success: true,
            ratingsPage
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