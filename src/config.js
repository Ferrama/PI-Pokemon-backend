const dotenv = require("dotenv"); ;
dotenv.config();

module.exports = {
    DB_CONNECT: process.env.DB_CONNECT || '',
};