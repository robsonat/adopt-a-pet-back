import mongoose from "mongoose";

import { inquirySchema } from "./Inquiry.js"
import { adopterSchema } from "./Adopter.js";


const petSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    name: { type: String, required: true },
    specie: { type: String, required: true },
    sex: { type: String, required: true},
    birthDate: { type: Date },
    inq: inquirySchema,
    adopter: adopterSchema,
}, { versionKey: false });


const pet = mongoose.model("pets", petSchema);

export default pet;