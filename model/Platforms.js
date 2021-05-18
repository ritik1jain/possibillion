const mongoose = require("mongoose");

const PlatformSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    about: {
        type: String,
        required: true
    },
    url: {
        type: String
    }
});

module.exports = mongoose.model("platform", PlatformSchema);
