import { Schema, model } from 'mongoose'

const PlantSchema = new Schema({
    _id: Number,
    imgPlant: String,
    name: String,
    subtitle: String,
    type: String,
    price: Number,
    discountPercentage: Number,
    label: {
        type: String,
        enum: ['Indoor', 'Outdoor'],
        required: true
    },
    features: String,
    description: String,
}, {

    toJSON: {
        virtuals: true

    }
})

export default model('Plant', PlantSchema)