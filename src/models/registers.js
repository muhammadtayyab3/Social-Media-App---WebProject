const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    pass: {
        type: String,
        required: true
    },
    re_pass: {
        type: String,
        required: true
    }
})
const Register = new mongoose.model("Register", registerSchema);
module.exports = Register;