//var Detail = require('./models/detail');
var Post = require('./models/post');
var Author = require('./models/author');



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

module.exports = function (app, passport) {

    // api ---------------------------------------------------------------------
    // get all posts
    app.get('/api/posts', function (req, res) {
        // use mongoose to get all post in the database
        getPosts(res);
    });
    // create post and send back all post after creation
    app.post('/api/posts', function (req, res) {
         console.log(req.body);
        // create a post, information comes from AJAX request from Angular
        Post.create({
            //postId: req.body.postId,
            headingOne: req.body.headingOne,
            headingTwo: req.body.headingTwo,
            contentOne: req.body.contentOne,
            contentTwo: req.body.contentTwo,
            contentThree: req.body.contentThree,
            contentFour: req.body.contentFour,
            quote: req.body.quote,
            image: req.body.image,
            imageText: req.body.imageText,
            date: req.body.date,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            smallSubTitle: req.body.smallSubTitle,
            bigTitle: req.body.bigTitle


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
        console.log(req.params.postId);
        // use mongoose to get posts detail in the database
        Post.find({_id: req.params.postId}, function (err, results) { //for mongoose the first arg is always the error and second is the resultset..if there is an error then rs is null and vice versa
            if (err) {
                res.send(err);
            }
            res.json(results); // return posts detail in JSON format

        });
    });

    // get profile 
    app.get('/api/profile/:author', function (req, res) {
        // use mongoose to get posts detail in the database
        Author.find({firstName: req.params.author}, function (err, results) { //for mongoose the first arg is always the error and second is the resultset..if there is an error then rs is null and vice versa
            if (err) {
                res.send(err);
            }

            res.json(results); // return posts detail in JSON format

        });
    });

     // =====================================
    // HOME PAGE (with login links) ========
    // =====================================
   // app.get('/', function(req, res) {
//        res.render('index.ejs'); // load the index.ejs file
  //  });

    // =====================================
    // LOGIN ===============================
    // =====================================
    // show the login form
    app.get('/login', function(req, res) {
        // render the page and pass in any flash data if it exists
        res.render('login.ejs', { message: req.flash('loginMessage') }); 
    });

    // process the login form
    // app.post('/login', do all our passport stuff here);

    // =====================================
    // SIGNUP ==============================
    // =====================================
    // show the signup form
   // app.get('/signup', function(req, res) {
        // render the page and pass in any flash data if it exists
   //     res.render('signup.ejs', { message: req.flash('signupMessage') });
   // });

    // process the signup form
       // process the signup form
    //app.post('/signup', passport.authenticate('local-signup', {
    //    successRedirect : '/profile', // redirect to the secure profile section
     //   failureRedirect : '/signup', // redirect back to the signup page if there is an error
    //    failureFlash : true // allow flash messages
    //}));

    // =====================================
    // PROFILE SECTION =====================
    // =====================================
    // we will want this protected so you have to be logged in to visit
    // we will use route middleware to verify this (the isLoggedIn function)
    //app.get('/profile', isLoggedIn, function(req, res) {
      //          res.json(req.user); // return posts detail in JSON format

        // res.render('profile.ejs', {
        //     user : req.user // get the user out of session and pass to template
        // });
    //});
    app.get('/sessionValidation', isLoggedIn, function(req, res) {
                res.json(req.user); // return posts detail in JSON format

        // res.render('profile.ejs', {
        //     user : req.user // get the user out of session and pass to template
        // });
    });
    // =====================================
    // LOGOUT ==============================
    // =====================================
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/#/jab');
    });

    // process the login form
    app.post('/login', passport.authenticate('local-login', {
        successRedirect : '/#/jab', // redirect to the secure profile section
        failureRedirect : '/login', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));


};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        console.log("logged in");

        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
    console.log("not logged in");

}
