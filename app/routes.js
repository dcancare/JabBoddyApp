var Detail = require('./models/detail');
var Post = require('./models/post');


function getPosts(res) {
    Post.find(function (err, posts) {
        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(err);
        }

        res.json(posts); // return all posts in JSON format
    });
}
;

module.exports = function (app) {

    // api ---------------------------------------------------------------------
    // get all posts
    app.get('/api/posts', function (req, res) {
        // use mongoose to get all post in the database
        getPosts(res);
    });
    // create post and send back all post after creation
    app.post('/api/posts', function (req, res) {
         console.log('here');
        // create a post, information comes from AJAX request from Angular
        Post.create({
            postId: req.body.text,
            headingOne: 'heading'
        }, function (err, post) {
            if (err)
                res.send(err);

            // get and return all the posts after you create another
            getPosts(res);
        });

    });

    // delete a post
    app.delete('/api/posts/:post_id', function (req, res) {
        Post.remove({
            _id: req.params.post_id
        }, function (err, post) {
            if (err)
                res.send(err);

            getPosts(res);
        });
    });

    // get post detail
    app.get('/api/detail/:postId', function (req, res) {
        // use mongoose to get posts detail in the database
        Detail.find({postId:req.params.postId}, function (err, results) { //for mongoose the first arg is always the error and second is the resultset..if there is an error then rs is null and vice versa
            if (err)
                res.send(err);
            res.json(results); // return posts detail in JSON format

        });
    });

};