const express=require('express');
const bodyparser=require('body-parser');
const cors=require('cors');
const app=express();
const session=require('express-session');
const helmet=require('helmet');
const morgan=require('morgan');
const dotenv=require('dotenv');
require('./db');
//const mongoStore=require('connect-mongo')(session);
const fileStore=require('session-file-store')(session);
let options = {
    secret: '1c!@#$#k@s1*$%t',
    resave:false,   //계속 저장 false
    saveUninitialized:true, //session이 필요할때 사용 true
    store:new fileStore()//new mongoStore({
        //url:"mongodb://localhost/moviej_db",
        //collection:"sessions"
    //}) 
}
dotenv.config();
app.use(helmet());
app.use(session(options));
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use(morgan("dev"));
app.use(cors());

const port=process.env.PORT || 8000;
require('./routes')(app);
app.listen(port,()=>{
    console.log("Express server has started on port:: "+port);
})