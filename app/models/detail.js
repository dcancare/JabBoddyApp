var mongoose = require('mongoose');

module.exports = mongoose.model('Detail', {
	postId: String,
	image: String,
	headingOne: String,
	headingTwo: String,
	contentOne: String,
	contentTwo: String,
	contentThree: String,
	contentFour: String,
	quote: String,
	imageText: String
});