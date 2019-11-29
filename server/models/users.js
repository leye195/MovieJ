let mongoose=require('mongoose');
let Schema=mongoose.Schema;
let userSchema=new Schema({
    name:String,
    password:String,
    register_date:{type:Date,default:Date.now()}
})
module.exports = mongoose.model('user',userSchema);