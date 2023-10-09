const mongoose = require("mongoose");

const PersonSchema = mongoose.Schema({
    email : String,
    password : String,
});

module.exports = mongoose.model('Person', PersonSchema);