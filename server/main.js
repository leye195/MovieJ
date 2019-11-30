const express=require('express');
const bodyparser=require('body-parser');
const cors=require('cors');
const app=express();
const session=require('express-session');
//const db=require('./db');
let options = {
    secret: 'cookiesecret',
    resave:false,
    saveUninitialized:true
}
app.use(session(options));
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use(cors());
let mongoose=require('mongoose');
let db=mongoose.connection;
db.on('error',console.error);
db.once('open',()=>{
    console.log("Connected to mongodb server");
})
mongoose.connect(`mongodb://localhost/moviej_db`);
//mongoose.connect(`mongodb://heroku_lkcv7xs8:4hapnt3gst805fkqenk41ghics@ds251158.mlab.com:51158/heroku_lkcv7xs8`);
const user=require('./models/users');
const port=process.env.PORT || 8080;
const router=require('./routes')(app,user);
const server=app.listen(port,()=>{
    console.log("Express server has started on port:: "+port);
})