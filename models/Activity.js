const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ActivitySchema = new Schema({
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
    sport: {
        type: String,
        required: true
    },
    distance: {
        type: String,
        required: true
    },
    time: {
        type: Number,
        required: true
    }
});

const Activity = mongoose.model("Activity", ActivitySchema);

module.exports = Activity;
