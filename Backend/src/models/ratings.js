import mongoose, {Schema} from 'mongoose'

const ratingsSchema = mongoose.Schema({
    name:{
        type:Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    review:{
        type: String,
        maxLength: 50,
        required: false
    },
    ratings:{
        type:Number,
        max:5,
        min: 1,
        required: true
    }
},{
    timestamps: true
})

const Ratings = mongoose.model('Ratings', ratingsSchema)
export default Ratings