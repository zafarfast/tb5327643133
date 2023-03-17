const router = require('express').Router(); //Import express router function
const { Comments, Posts, User } = require('../../model'); //Import Hotel, User and Review tables from models folder
const sequelize = require('../../config/connection'); // Adding MySQL daatbase connection
var validator = require("email-validator");



router.get('/', async(req,res)=>{
    res.render('signup',{})
})

router.post('/', async(req,res)=>{

    if (validator.validate(req.body.email))
    {
        const checkIfUserExistInDb = await User.findOne({where: {email:req.body.email}})
        if (!checkIfUserExistInDb)
            {
                await User.create({
                name: req.body.name,
                email: req.body.email, 
                password: req.body.password
                });
            
                req.session.userloggedin = true;
                req.session.email = req.body.email;
                res.send('/')
            }
        else
        {
            res.send('Email address already exist')

        }
    }
    else
    {
        res.send('Email address is not valid')
    }
})

module.exports = router;
