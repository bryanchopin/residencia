import { Schema, models, model } from "mongoose";

const markerSchema = new Schema({
    longitude: {
        type: Number,
        required: true,
        unique: true
    },
    latitude: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
})

export default models.Marker || model('Marker', markerSchema)