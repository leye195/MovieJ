const express=require('express');
const bodyparser=require('body-parser');
const cors=require('cors');
const app=express();
const session=require('express-session');
const helmet=require('helmet');
const dotenv=require('dotenv');
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
app.use(session(options));
app.use(helmet());
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use(cors());
const db=require('./db');
const user=require('./models/users');
const port=process.env.PORT || 8000;
const router=require('./routes')(app,user);
const server=app.listen(port,()=>{
    console.log("Express server has started on port:: "+port);
})