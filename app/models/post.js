var mongoose = require('mongoose');

module.exports = mongoose.model('Post', {
    name: String,
    snippet: String,
    author: String,
    date: String,
	image: String,
	headingOne: String,
	headingTwo: String,
	contentOne: String,
	contentTwo: String,
	contentThree: String,
	contentFour: String,
	quote: String,
	imageText: String,
	bigTitle: String,
	smallSubTitle: String
});
