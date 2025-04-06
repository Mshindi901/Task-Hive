import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    role:{
        type:String,
        required: true
    },
    location:{
        City:{
            type: String,
            required: true
        },
        State:{
            type:String,
            required: false
        },
        Zip:{
            type:String,
            required:false
        }
    },
    phoneNumber:{
        type:String,
        required: true,
        unique: true
    },
    profilePicture:{
        type: String,
        required: false
    },
    password:{
        type:String,
        required: true
    }
},{
    timestamps: true
})
const User = mongoose.model('User', UserSchema)
export default User