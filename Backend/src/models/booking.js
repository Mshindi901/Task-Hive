import mongoose from "mongoose";

const bookingSchema =  new mongoose.Schema({
    clientId:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    providerId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: true
    },
    service:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ServiceProfile',
        required: true
    },
    status:{
        type: String,
        enum:[
            "pending",
            "Accepted"
        ],
        default : "pending",
        required: true
    },
    bookingdate:{
        type: Date,
        required: true
    }
},{timestamps: true})

const Bookings = mongoose.model('Bookings', bookingSchema)
export default Bookings