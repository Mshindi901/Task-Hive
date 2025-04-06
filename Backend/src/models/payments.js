import mongoose from "mongoose";

const PaymentSchema = new mongoose.Schema({
    phoneNumber:{
        type: String,
        required: true
    },
    amount:{
        type:String,
        required: true,
    }
},{timestamps: true})
const Payment = mongoose.model('Payment', PaymentSchema)
export default Payment