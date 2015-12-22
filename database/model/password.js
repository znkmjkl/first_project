import mongoose from 'mongoose'

var password = mongoose.model('Password', {loginName : {type : String, index : {unique : true}}, password : String});

export default password