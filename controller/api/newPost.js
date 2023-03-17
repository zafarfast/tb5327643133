const router = require('express').Router(); //Import express router function
const { Comments, Posts, User } = require('../../model'); //Import Hotel, User and Review tables from models folder
const sequelize = require('../../config/connection'); // Adding MySQL daatbase connection






router.post('/', async(req,res)=>{
    await Posts.create({
        email: req.session.email,
        heading: req.body.heading,
        text: req.body.text, 
    });
    res.send('New post added')
})

router.get('/', async(req,res)=>{
    res.render('newpost',{userloggedin: req.session.userloggedin})
})

module.exports = router;
