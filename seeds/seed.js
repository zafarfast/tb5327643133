const {User, Posts, Comments} = require('../model/')
const sequelize = require('../config/connection');

const seedData = [
    {
      "name": "Alice",
      "email": "alice@hotmail.com",
      "password": "password1"
    },
    {
      "name": "Bob",
      "email": "bob@hotmail.com",
      "password": "password2"
    },
    {
      "name": "Charlie",
      "email": "charlie@gmail.com",
      "password": "password3"
    }
  ]

  const postsSeedData = [
    {
      "email": "alice@hotmail.com",
      "heading": "Setting up Sequalize",
      "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        "email": "alice@hotmail.com",
        "heading": "Setting up ORMs",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
  
    {
      "email": "bob@hotmail.com",
      "heading": "Setting up React",
      "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      "email": "charlie@gmail.com",
      "heading": "Setting up MySQL",
      "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]

  const commentsSeedData = [
    {
      "post_id": "1",
      "comment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "comment_by": "alice@hotmail.com",
    },
    {
        "post_id": "1",
        "comment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "comment_by": "bob@hotmail.com",

    },
  
    {
        "post_id": "2",
        "comment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "comment_by": "bob@hotmail.com",

    },
    {
        "post_id": "3",
        "comment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "comment_by": "charlie@gmail.com",

    }
  ]



const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    await User.bulkCreate(seedData);
    await Posts.bulkCreate(postsSeedData);
    await Comments.bulkCreate(commentsSeedData)
}

seedDatabase()