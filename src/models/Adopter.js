import mongoose from "mongoose";

const adopterSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    name: { type: String, required: true },
    sex: { type: String }
}, { versionKey: false });


const adopter = mongoose.model("adopters", adopterSchema);

export { adopter, adopterSchema };