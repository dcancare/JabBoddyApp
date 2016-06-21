var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema(
{
	image: String,
	headingOne: String,
	headingTwo: String,
	contentOne: String,
	contentTwo: String,
	contentThree: String,
	contentFour: String,
	imageText: String,
	bigTitle: String,
	smallSubTitle: String,
	questionArray:[
		{
			question: String,
			answer: String
		}
	]
},
{
    timestamps: true
});

module.exports = mongoose.model('Post', PostSchema);