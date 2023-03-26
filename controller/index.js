const router = require('express').Router(); //Importing express-router

const homeroute = require('./homeroute') //Import home route
const comments = require('./api/comments'); //Import comments route
const dashboard = require('./api/dashboard'); //Import dashboard route
const logout = require('./api/logout'); //Import logout route
const newComment = require('./api/newComment'); //Import newComment route
const newPost = require('./api/newPost'); // Import newPost route
const signin = require('./api/signin'); // Import sign route
const signup = require('./api/signup'); // Import signup route
const updatePost = require('./api/updatePost'); // Import updatePost route
const deletePost = require('./api/deletePost'); // Import deletePost route

//Adding routes to the Router middleware
router.use('/', homeroute);
router.use('/comments', comments);
router.use('/dashboard', dashboard);
router.use('/logout', logout);
router.use('/newComment', newComment);
router.use('/newPost', newPost);
router.use('/signin', signin);
router.use('/signup', signup);
router.use('/updatePost', updatePost);
router.use('/deletePost', deletePost);

module.exports = router;
