var mongoose = require('mongoose');

module.exports = mongoose.model('Author', {
	image: String,
	firstName: String,
	lastName: String,
	location: String,
	favoriteBoxer: String
});