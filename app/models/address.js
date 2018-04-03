//load the thisng we need

var mongoose = require ('mongoose');

//to define the sqchema for our user model in our db table
var addressSchema = mongoose.Schema({
    name: String,
    street_1: String,
    street_2: String, 
    city: String, 
    state: String, 
    zip_code: String, 
    country: String, 
    user: String,
});

//to create the model and expose in to our app
module.export = mongoose.model('address', addressSchema); 