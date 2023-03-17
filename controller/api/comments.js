const router = require('express').Router(); //Import express router function
const { Comments, Posts, User } = require('../../model'); //Import Hotel, User and Review tables from models folder
const sequelize = require('../../config/connection'); // Adding MySQL daatbase connection


router.get('/:id',async (req,res)=>{
    if (req.session.userloggedin)
    {
    const k = await Posts.findOne({where:{id:req.params.id}})

    const p = await Comments.findAll({where:{post_id:req.params.id}})
    const j = p.map((i) => i.get({ plain: true }));

    res.render('comments',{postid: k.id, postheading: k.heading, posttext: k.text, comments: j, userloggedin: req.session.userloggedin})
    }
    else {
        
        res.redirect('/')
    }

})

module.exports = router;

