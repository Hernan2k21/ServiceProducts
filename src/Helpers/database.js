const db =  require("mongoose");
const connect = db.connect
const config = require('../../config/app.config')['database'];

async function initDatabase () {

        try{
          const uri = `mongodb+srv://${config.username}:${config.password}@${config.host}/?retryWrites=true&w=majority`
          connect(uri, { useNewUrlParser: true })
          console.log("Connected to db")
        }
        catch(e){
            console.trace(e)
        }
       
}

module.exports = initDatabase