
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 3,
        max: 10,
        unique: true
    },
    password: {
        select: false,
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    following: {
        type: Array,
        default: []
    },
    createdAt: {
        type: Date,
        default: () => new Date()
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;