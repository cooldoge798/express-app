const dotenv = require('dotenv');

dotenv.config({ path: __dirname + '/.env' })

var config = {
    appName: process.env.appName,
};

module.exports = config;