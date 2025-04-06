/* eslint-disable no-undef */
import dotenv from 'dotenv'
import axios from 'axios'
dotenv.config()

const baseUrl = process.env.ACCESS_URL

const accessToken = async(req,res,next)=>{
    const consumerSecret = process.env.CONSUMER_SECRET
    const consumerKey = process.env.CONSUMER_KEY
    const auth = Buffer.from(`${consumerKey}:${consumerSecret}`).toString('base64')
    try {
        const data = await axios.get((baseUrl),{ 
            headers:{
                Authorization: `Basic ${auth}`
            }
        }
    )
    req.token = data.data.access_token
    console.log(`Access Token ${req.token}`)
    const response = data.data
    console.log(response)
    next()
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}
export default accessToken;
