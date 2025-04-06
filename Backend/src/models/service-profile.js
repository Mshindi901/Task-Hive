import mongoose, { Schema } from "mongoose";

const ServiceProfileSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    Description:{
        type:String,
        maxLength: 300,
        required: true
    },
    service:{
        category:{
            type:String,
            required: true
        },
        name:{
            type:String,
            required: true
        }
    },
    location:{
        city:{
            type:String,
            required: true
        },
        state:{
            type:String,
            required:true
        }
    },
    contact:{
        phone:{
            type: String,
            required: true
        },
        email:{
            type: String,
            required: true
        }
    },
    ratings:[{
        type: Schema.Types.ObjectId,
        ref: 'Ratings',
        required: true
    }]
},{
    timestamps: true
})
const ServiceProfile = mongoose.model('ServiceProfile', ServiceProfileSchema)
export default ServiceProfile