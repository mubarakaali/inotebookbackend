import { type } from "@testing-library/user-event/dist/type";
import mongoose, { model, Schema } from "mongoose";

const NotesSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    tag: {
        type: String,
        default: "General"
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('notes',NotesSchema);