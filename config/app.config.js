
require('dotenv').config()

module.exports = {
    server:{
        port: process.env.PORT,
    },
    database:{
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            name: process.env.DB_NAME
            //add options
    },
  };
  