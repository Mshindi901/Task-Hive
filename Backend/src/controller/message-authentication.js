/* eslint-disable no-undef */
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

const authentication = (req, res) => {
    const token = req.headers('authorization')
    if(!token){
        return res.status(401).json({
            success: false,
            message: "User not Logged in"
        })
    }

    try {
        const SecretKey = process.env.JWT_SECRET_KEY
        const decode = jwt.decode(token, SecretKey)
        req.user = decode
        next()
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}

export default authentication