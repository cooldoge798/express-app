const dotenv = require('dotenv');

dotenv.config({ path: __dirname + '/.env' })

var config = {
    appName: process.env.appName,
    userList: [
        {
            name: "User 1",
            email: "user1@email.com",
        },
        {
            name: "User 2",
            email: "user2@email.com",
        },
    ]
};

module.exports = config;