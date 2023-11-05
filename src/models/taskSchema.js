import mongoose from "mongoose";

const Task = mongoose.Schema({
    titletask: {
        type: String,
        require: true,
    },
    subtitletask: {
        type: String,
        require: true,
    },
    descriptiontask: {
        type: String,
        require: true,
    },
    isActive: Boolean,
})
export default mongoose.model('Task', Task);
