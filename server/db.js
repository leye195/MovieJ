const dotenv = require('dotenv');
const mongoose=require('mongoose');
dotenv.config();
mongoose.connect(process.env.HEROKU_DB_URL,{
    useNewUrlParser:true,
    useFindAndModify:false
});
const db=mongoose.connection;
db.on('error',console.error);
db.once('open',()=>{
    console.log("Connected to mongodb server");
})
