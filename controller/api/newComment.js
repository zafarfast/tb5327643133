const router = require('express').Router(); //Import express router function
const { Comments, Posts, User } = require('../../model'); //Import Hotel, User and Review tables from models folder
const sequelize = require('../../config/connection'); // Adding MySQL daatbase connection


router.get('/:id', async(req,res)=>{
    res.render('newcomment',{userloggedin: req.session.userloggedin})
})

router.post('/:id', async(req,res)=>{

if (req.session.userloggedin)
   { const p = await Posts.findOne({where: {id:req.params.id}})
    const o = await Comments.create({
        post_id:req.params.id,
        comment:req.body.text,
        comment_by:req.session.email,
    })
    // const k= await Comments.findOne({where: {id:p.email}})
    res.redirect(`/comments/${req.params.id}`)
    }
    else
    {
        res.redirect('/')
    }
})

module.exports = router;

