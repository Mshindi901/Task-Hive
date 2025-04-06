/* eslint-disable no-undef */
import axios  from 'axios';
import dotenv from 'dotenv';
import express from 'express';
import Payment from '../models/payments.js'
import accessToken from '../controller/access-token.js'

const router = express.Router()
dotenv.config();
const baseUrl = process.env.AUTHORIZATION_URL
router.post('/stkpush', accessToken,  async (req, res) => {
    let {phoneNumber} = req.body
    const {amount} = req.body
    
    if(phoneNumber.startsWith(`0`)){
        phoneNumber = phoneNumber.substring(1)
    }
    const ShortCode = process.env.PAYBILL
    const Passkey = process.env.PASSKEY
    const date = new Date()
    const Timestamp = date.getFullYear().toString()+
        String(date.getMonth() + 1).padStart(2, '0') +
        String(date.getDate()).padStart(2, '0') +
        String(date.getHours()).padStart(2, '0')+
        String(date.getMinutes()).padStart(2, '0')+
        String(date.getSeconds()).padStart(2, '0');
        
    const password = Buffer.from(`${ShortCode}${Passkey}${Timestamp}`).toString('base64')
    try {

        const data = await axios.post((baseUrl),
        {    
            "BusinessShortCode": `${ShortCode}`,    
            "Password": `${password}`,    
            "Timestamp":`${Timestamp}`,    
            "TransactionType": "CustomerPayBillOnline",    
            "Amount": amount,    
            "PartyA": `254${phoneNumber}`,    
            "PartyB": `${ShortCode}`,    
            "PhoneNumber": `254${phoneNumber}`,    
            "CallBackURL": "https://mydomain.com/pat",    
            "AccountReference":"Test",    
            "TransactionDesc":"Test"
            },
            {
            headers: {
                Authorization: `Bearer ${req.token}`,
            }
            })
            const newPaymentForm = new Payment({
                phoneNumber,
                amount
            })
            await newPaymentForm.save()

            res.status(200).json({
                success: true,
                message: 'STK push Successful',
                response: data.data
            })
    } catch (error) {
        console.log('STK push Error:', error.message);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message
        })
    }
}
)

export default router;