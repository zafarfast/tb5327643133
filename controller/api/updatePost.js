const router = require('express').Router(); //Import express router function
const { Comments, Posts, User } = require('../../model'); //Import Hotel, User and Review tables from models folder
const sequelize = require('../../config/connection'); // Adding MySQL daatbase connection



router.get('/:id', async (req,res)=>{

    if (req.session.userloggedin)
    {
        const k = await Posts.findOne({where:{id:req.params.id}})

        res.render('editpost',{postid: k.id, postheading: k.heading, posttext: k.text, userloggedin: req.session.userloggedin})
    }
    else
    {
        res.redirect('/')
    }
})

router.post('/:id', async (req,res)=>{

    if (req.session.userloggedin)
    {
        const p = await Posts.update({
            text: req.body.text,
        },{where: {id:req.params.id}})
    
        res.send('Post has been updated')
    }
    else
    {
        res.redirect('/')
    }
})

module.exports = router;
