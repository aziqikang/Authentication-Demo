const mongoose = require("mongoose");

const PersonSchema = mongoose.Schema({
    firstName : String,
    lastName : String,
});

module.exports = mongoose.model('Person', PersonSchema);