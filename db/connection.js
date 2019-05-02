const mongoose = require('mongoose');
const url = require('../utils/config').db;
mongoose.connect(url,(err)=>{
    if(err){
        throw err;
    }
    else{
        console.log('Connection established.');
    }
})
const Schema = mongoose.Schema;
const Keywords = new Schema({
    'keyword':{type:String,required:true}
});
const model = mongoose.model('keywords',Keywords);
module.exports = model;