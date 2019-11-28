const express=require('express');
const app=express();

const port=process.env.PORT || 8080;
const router=require('./routes')(app);

const server=app.listen(port,()=>{
    console.log("Express server has started on port:: "+port);
})