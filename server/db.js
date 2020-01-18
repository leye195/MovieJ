const dotenv = require('dotenv');
dotenv.config();
const mongoose=require('mongoose');
mongoose.connect(process.env.LOCAL_DB_URL,{
    useNewUrlParser:true,
    useFindAndModify:false
});
const db=mongoose.connection;
db.on('error',console.error);
db.once('open',()=>{
    console.log("Connected to mongodb server");
})
