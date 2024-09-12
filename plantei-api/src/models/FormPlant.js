import { Schema, model } from 'mongoose'

const PlantSchema = new Schema({
    _id: Number,
    imgPlant: String,
    name: String,
    subtitle: String,
    type: String,
    price: Number,
    discountPercentage: Number, discountPercentage: {
        type: Number,
        min: [0, 'O desconto não pode ser inferior a 0'],
        max: [100, 'O desconto não pode ser superior a 100'],
    },
    label: {
        type: String,
        enum: ['Indoor', 'Outdoor'],
        required: true
    },
    features: String,
    description: String,
    isInSale: Boolean,
}, {

    toJSON: {
        virtuals: true

    }
})
// Middleware para definir isInSale com base em discountPercentage
PlantSchema.pre('save', function (next) {
    this.isInSale = this.discountPercentage > 0;
    next();
});

export default model('Plant', PlantSchema)