const mongoose=require('mongoose');
let newsSchema=mongoose.Schema({
    title:{type:String,require:true},
    desc:{type:String,require:true},
    data:{type:Array,require:true},
    imgurl:{type:String}
});
const news=mongoose.model('news',newsSchema);
module.exports=news