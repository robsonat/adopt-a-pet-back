import mongoose from "mongoose";

const inquirySchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    date: { type: Date },
    pet: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'pets'
    },
    adopter: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'adopters'
    }
}, { versionKey: false });


const inquiry = mongoose.model("inquiries", inquirySchema);

export { inquiry, inquirySchema };