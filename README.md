# Tech Blog website

### Description

Tech blog allows user to share their ideas, opinions and thoughts with the world by writing blogs and comment on other user's blogs. The platform requires users to sign-up in order to comment on posts.

## How to run the application

#### Prerequisites:
- Node JS
- MYSQL server

#### Steps:

1) Clone this repository to your machine by typing `git clone git@github.com:zafarfast/tb5327643133.git` on the terminal.
2) Install all dependencies by typing `npm install`.
3) Initialize SQL server by typing `mysql -u <username> -p<password>`.
4) Go to .\db directory and run schema.sql `source schema.sql`.
5) Change MySQL username and password in Connection.js file or .env file to match your credentials.
6) Seed the database by typing `node seeds\seed.js` in home directory.
7) Run the application by typing `node server.js` in the terminal.

## Links
#### Github 
https://github.com/zafarfast/tb5327643133
#### Heroku 
https://tech-blog-website.herokuapp.com/

#### Schema

![Node](/assets/images/schema.jpg)

#### Screenshots

![Node](/assets/images/Screenshot_homepage.jpg)

![Node](/assets/images/Screenshot_signin.jpg)

![Node](/assets/images/Screenshot_signup.jpg)

![Node](/assets/images/Screenshot_addcomment.jpg)

![Node](/assets/images/Screenshot_dashboard.jpg)

