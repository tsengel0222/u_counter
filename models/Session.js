const mongoose = require("mongoose");

// Define Session schema
const sessionSchema = new mongoose.Schema({
    sessionId: {
        type: String,
        required: [true, "sessionId is required"],
        minLength: 3,
        maxLength: 20,
        trim: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    startTime: {
        type: Date,
        default: Date.now,
    },
    endTime: {
        type: Date,
    },
});

const Session = mongoose.model("Session", sessionSchema);

module.exports={Session}