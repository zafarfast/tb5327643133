const router = require('express').Router(); //Import express router function
const { Comments, Posts, User } = require('../../model'); //Import Hotel, User and Review tables from models folder
const sequelize = require('../../config/connection'); // Adding MySQL daatbase connection


router.delete('/:id', async (req,res)=>{

    if (req.session.userloggedin)
    {
        const p = await Posts.destroy({where: {id:req.params.id}})
        res.send('Post has been deleted')
    }
    else
    {
        req.redirect('/')
    }
})

module.exports = router;
