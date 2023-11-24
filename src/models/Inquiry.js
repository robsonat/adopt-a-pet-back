import mongoose from "mongoose";

const inquirySchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    date: { type: Date },
}, { versionKey: false });


const inquiry = mongoose.model("inquiries", inquirySchema);

export { inquiry, inquirySchema };