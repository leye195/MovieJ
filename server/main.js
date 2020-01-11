const express=require('express');
const bodyparser=require('body-parser');
const cors=require('cors');
const app=express();
const session=require('express-session');
const helmet=require('helmet');
//const mongoStore=require('connect-mongo')(session);
let mongoose=require('mongoose');
let db=mongoose.connection;
const fileStore=require('session-file-store')(session);
//const db=require('./db');
let options = {
    secret: '1c!@#$#k@s1*$%t',
    resave:false,   //계속 저장 false
    saveUninitialized:true, //session이 필요할때 사용 true
    store:new fileStore()//new mongoStore({
        //url:"mongodb://localhost/moviej_db",
        //collection:"sessions"
    //}) 
}
app.use(session(options));
app.use(helmet());
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use(cors());

db.on('error',console.error);
db.once('open',()=>{
    console.log("Connected to mongodb server");
})
//mongoose.connect(`mongodb://localhost/moviej_db`);
mongoose.connect(`mongodb://heroku_lkcv7xs8:4hapnt3gst805fkqenk41ghics@ds251158.mlab.com:51158/heroku_lkcv7xs8`);
const user=require('./models/users');
const port=process.env.PORT || 8080;
const router=require('./routes')(app,user);
const server=app.listen(port,()=>{
    console.log("Express server has started on port:: "+port);
})