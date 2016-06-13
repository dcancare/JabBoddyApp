var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema(
{
    firstName: String,
    lastName: String,
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
	smallSubTitle: String,
},
{
    timestamps: true
});

module.exports = mongoose.model('Post', PostSchema);