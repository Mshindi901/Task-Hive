import express from 'express'
import cors from 'cors'
import connectDB from './src/config/db.js'

//routes
import createAccount from './src/Routes/Create-account.js'
import LoginAccount from './src/Routes/Login-account.js'
import UserDetails from './src/Routes/User-details-account.js'
import UserAccountUpdate from './src/Routes/User-account-update.js'
import CreateProfile from './src/Routes/Create-profile.js'
import getProfile from './src/Routes/get-profile.js'
import updateProfile from './src/Routes/Profile-update.js'
import Addratings from './src/Routes/add-ratings.js'
import RatingsInfo from './src/Routes/get-ratings.js'
import createBookings from './src/Routes/Create-booking.js'
import getBookings from './src/Routes/get-bookings.js'
import Mpesa from './src/Routes/mpesa.js'


//model
import Message from './src/models/message.js'


//libraries
import { Server } from 'socket.io'
import http from 'http'


const app =  express()
const server = http.createServer(app)
const io = new Server(server, {
    cors:{origin: ""}
})
app.use(express.json())
app.use(cors())

//creation of accounts
app.use('/api', createAccount)


//logging in to accounts
app.use('/api', LoginAccount)
//get user details
app.use('/api', UserDetails)
//update user accounts
app.use('/api', UserAccountUpdate)
//create new service profile
app.use('/api', CreateProfile)
//get profile info
app.use('/api', getProfile)
//updating profile info
app.use('/api', updateProfile)
//create new ratings
app.use('/api', Addratings)
//get the ratings
app.use('/api/ratings/:id', RatingsInfo)
//create bookings
app.use('/api', createBookings)

app.use('/ap', getBookings)

app.use('/api', Mpesa)
const chatroom = {}

io.on('connection', (socket) => {
    console.log(`User connected ${socket.id}`)

    socket.on('join-room', ({senderId, receiverId}) => {
        const roomId = [senderId, receiverId].sort().join('_')
        socket.join(roomId)
        chatroom[socket.id] = roomId
    })
    
    socket.on('messages', async({senderId, receiverId, message}) =>{
        const roomId = [senderId, receiverId].sort().join('_')
    
        try {
            const newMessage = new Message({
                sender: senderId,
                receiver: receiverId, 
                message,
            })
            await newMessage.save()
    
            io.to(roomId).emit("receive message", {sender: senderId, message, timestamps: new Date()})
        } catch (error) {
            console.log(error)
        }
    })
})

// fetch all messages
app.get('/api/messages/:senderId/:receiverId', async (req, res) => {
    const {senderId, receiverId} = req.params

    try {
        const Messages = await Message.find({
            $or:[
                {sender: senderId, receiver: receiverId},
                {sender: receiverId, receiver: senderId}
            ]
        })
        return res.status(201).json({
            success: true,
            Messages
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
})


server.listen(5000, () => {
    connectDB();
    console.log('Server is live on port 5000')
})

