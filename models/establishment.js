import { Schema, models, model } from "mongoose";

// creates this points schema

const establishmentSchema = new Schema({
    
    name: {
        type: String,
        unique: false,
        required: true,
        trim: true,
    },
    address: {
        type: String,
        unique: false,
        required: true,
        trim: true,
    },
    phone: {
        type: String,
        unique: false,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        unique: false,
        required: true,
        trim: true,
    },
    web: {
        type: String,
        unique: false,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        unique: false,
        required: true,
        trim: true,
    },
    schedule: {
        type: String,
        unique: false,
        required: true,
        trim: true,
    },
},{
    timestamps: true,
    versionKey: false,
});

export default models.establishment || model("establishment", establishmentSchema);