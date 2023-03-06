const User = require('../model/User')
const Posts = require('../model/Posts');
const Comments = require('../model/Comments');
const sequelize = require('../config/connection');


Posts.belongsTo(User,{
    foreignKey: 'email'
})
User.hasMany(Posts,{
    foreignKey: 'email',
    onDelete: "CASCASE"

})

Comments.belongsTo(Posts,{
    foreignKey: 'post_id'
})

Posts.hasMany(Comments)

module.exports = { User, Posts, Comments}