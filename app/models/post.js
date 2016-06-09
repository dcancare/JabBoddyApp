var mongoose = require('mongoose');

module.exports = mongoose.model('Post', {
    name: String,
    snippet: String,
    author: String,
    date: String,
    postId: String
});