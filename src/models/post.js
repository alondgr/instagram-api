
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new mongoose.Schema({
    body: {
        type: String,
        required: true,
    },
    likes: {
        type: Array,
        default: () => []
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    createdAt: {
        type: Date,
        default: () => new Date()
    },
    image: {
        type: String,
        required: true
    }
});

const Post = mongoose.model('post', postSchema);

module.exports = Post;