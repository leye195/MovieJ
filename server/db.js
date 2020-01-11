module.exports=(name)=>{
    let mongoose=require('mongoose');
    let db=mongoose.connection;
    db.on('error',console.error);
    db.once('open',()=>{
        console.log("Connected to mongodb server");
    })
    mongoose.connect(`mongodb://localhost/${name}`);
}