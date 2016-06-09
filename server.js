  // set up ========================
    var express  = require('express');
    var app      = express();                               // create our app w/ express
    var mongoose = require('mongoose');                     // mongoose for mongodb
    var morgan = require('morgan');             // log requests to the console (express4)
    var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
    var path = require('path');
    var port = process.env.PORT || 8080;                // set the port


    //var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)

    // configuration =================

    //mongoose.connect('mongodb://localhost/Jab');     // connect to mongoDB database on modulus.io
    mongoose.connect('mongodb://localhost/sandbox');     // connect to mongoDB database on modulus.io
    //mongoose.connect('mongodb://admin:admin@ds045001.mlab.com:45001/jab');
    app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
    app.use(morgan('dev'));                                         // log every request to the console
    app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
    app.use(bodyParser.json());                                     // parse application/json
    app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
   // app.use(methodOverride());


    // routes ======================================================================
    require('./app/routes.js')(app);
   
   // application -------------------------------------------------------------

  // respond with "index.html" when a GET request is made to the homepage
     app.get('/', function(req, res) {
         res.sendFile(path.resolve('./public/index.html'));
     });
    // listen (start app with node server.js) ======================================
    app.listen(port);
    console.log("App listening on port " + port);


    // define model =================
   // var Jab = mongoose.model('Post', {
     //   text : String
    //});

   

    // api ---------------------------------------------------------------------
    // get all posts
    // app.get('/api/posts', function(req, res) {

    //     // use mongoose to get all posts in the database
    //     Jab.find(function(err, posts) {

    //         // if there is an error retrieving, send the error. nothing after res.send(err) will execute
    //         if (err)
    //             res.send(err)

    //         res.json(posts); // return all posts in JSON format
    //     });
    // });

    // // create post and send back all posts after creation
    // app.post('/api/posts', function(req, res) {

    //     // create a post, information comes from AJAX request from Angular
    //     Jab.create({
    //         text : req.body.text,
    //         done : false
    //     }, function(err, post) {
    //         if (err)
    //             res.send(err);

    //         // get and return all the posts after you create another
    //         Jab.find(function(err, posts) {
    //             if (err)
    //                 res.send(err)
    //             res.json(posts);
    //         });
    //     });

    // });

    // // delete a post
    // app.delete('/api/posts/:post', function(req, res) {
    //     Jab.remove({
    //         _id : req.params.post
    //     }, function(err, post) {
    //         if (err)
    //             res.send(err);

    //         // get and return all the posts after you create another
    //         Jab.find(function(err, posts) {
    //             if (err)
    //                 res.send(err)
    //             res.json(posts);
    //         });
    //     });
    // });
