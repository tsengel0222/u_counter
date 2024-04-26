// Define Event schema
const eventSchema = new mongoose.Schema({
    eventId: {
        type: String,
        required: [true, "eventId is required"],
        minLength: 3,
        maxLength: 20,
        trim: true,
    },
    userId: {
        type: String,
        required: [true, "User ID is required"],
        minLength: 3,
        maxLength: 20,
        trim: true,
    },
    sessionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Session" // Reference to the Session model
    },
    deviceId:{
        type:String,
        required:[true,"deviceId is required"],
        minLength:3,
        maxLength:20,
        trim:true,
    }
});

const Event = mongoose.model("Event", eventSchema);

module.exports = {  Event };

